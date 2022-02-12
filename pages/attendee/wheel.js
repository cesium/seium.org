import { useState, useEffect } from "react";
import { withAuth, useAuth } from "/components/Auth";

import Heading from "/components/moonstone/utils/Heading";

import Dashboard from "/components/moonstone/user/utils/Dashboard";

import ListItem3 from "/components/moonstone/user/wheel/ListItem3Cols";
import ListItem4 from "/components/moonstone/user/wheel/ListItem4Cols";
import Wheel from "/components/moonstone/user/wheel/Wheel";
import WheelMessage from "/components/moonstone/user/wheel/WheelMessage";
import ErrorMessage from "/components/utils/ErrorMessage";

import { getWheelPrizes, getWheelLatestWins, spinWheel } from "/lib/api";

/*

Gets how long ago the given date/time was in a user friendly way (10 seconds ago, 1 minute ago, etc)

*/
function displayTimeSince(dateString) {
  const date = Date.parse(dateString);
  const now = new Date();

  const differenceMiliSeconds = now - date;

  if (differenceMiliSeconds <= 60 * 1000)
    return `${Math.round(differenceMiliSeconds / 1000)} seconds ago`;
  if (differenceMiliSeconds <= 60 * 60 * 1000)
    return `${Math.round(differenceMiliSeconds / (60 * 1000))} minutes ago`;
  if (differenceMiliSeconds <= 24 * 60 * 60 * 1000)
    return `${Math.round(differenceMiliSeconds / (60 * 60 * 1000))} hours ago`;

  return `${Math.round(
    differenceMiliSeconds / (24 * 60 * 60 * 1000)
  )} days ago`;
}

function WheelPage() {
  const defaultState = {
    angle: 0,
    speed: 0,
  };
  const angleSpeed = 20;
  const [st, updateState] = useState(defaultState);

  const { user, refreshUser } = useAuth();

  const [prizes, updatePrizes] = useState([]);
  const [latestWins, updateLatestWins] = useState([]);
  const [error, updateError] = useState(false);
  const [wheelMessage, updateWheelMessage] = useState(<></>);

  const requestAllInfo = () => {
    getWheelPrizes()
      .then((response) => updatePrizes(response.data))
      .catch((_) => updateError(true));

    getWheelLatestWins()
      .then((response) => updateLatestWins(response.data))
      .catch((_) => updateError(true));
  };

  useEffect(requestAllInfo, []);

  const spinTheWheel = () => {
    updateState({ angle: 0, speed: angleSpeed });
    spinWheel()
      .then((response) => {
        if (response.tokens) {
          updateWheelMessage(
            <WheelMessage
              title="You won tokens!"
              description={`Congratulations! You won ${response.tokens} tokens!`}
              onExit={(_) => updateWheelMessage(null)}
            />
          );
        } else if (response.badge) {
          updateWheelMessage(
            <WheelMessage
              title="You won a badge!"
              description={`Congratulations! You won the ${response.badge.name} badge. Go check it out in the badgedex tab.`}
              onExit={(_) => updateWheelMessage(null)}
            />
          );
        } else if (response.entries) {
          updateWheelMessage(
            <WheelMessage
              title="You won entries to the final draw!"
              description={`Congratulations! You won ${response.entries} entries for the final draw!`}
              onExit={(_) => updateWheelMessage(null)}
            />
          );
        } else if (response.prize.name == "Nada") {
          updateWheelMessage(
            <WheelMessage
              title="You din't win anything!"
              description="Better luck next time."
              onExit={(_) => updateWheelMessage(null)}
            />
          );
        } else {
          //TODO:: CHANGE THIS MESSAGE
          updateWheelMessage(
            <WheelMessage
              title={`You won a ${response.prize.name}!`}
              description={`Congratulations! You won a ${response.prize.name}!`}
              onExit={(_) => updateWheelMessage(null)}
            />
          );
        }
      })
      .catch((_) => {
        wheelMessage = (
          <WheelMessage
            title="You don't have tokens!"
            description="You do not have enough tokens to spin the wheel."
            onExit={(_) => updateWheelMessage(null)}
          />
        );
      })
      .finally((_) => {
        requestAllInfo();
        refreshUser();
      });
  };

  const changeState = () => {
    updateState({
      angle: (st.angle + st.speed) % 360,
      speed: st.speed - 0.1,
    });
  };

  //Rotate at 60fps
  useEffect(() => {
    if (st.speed > 0) setTimeout(changeState, 1000 / 60);
  }, [st]);

  const prizeComponents = prizes.map((entry, id) => (
    <ListItem4
      prob="2.00%"
      key={id}
      name={entry.name}
      qnty={entry.stock}
      maxQnty={entry.max_amount_per_attendee}
    />
  ));
  const latestWinsComponents = latestWins.map((entry, id) => (
    <ListItem3
      key={id}
      user={entry.attendee_name}
      badge={entry.prize.name}
      when={displayTimeSince(entry.date)}
      isLast={id == latestWins.length - 1}
    />
  ));
  return (
    <Dashboard
      href="wheel"
      title="Wheel"
      description="Spin the wheel and win awards!"
    >
      <div className="mt-12 grid-cols-1 overflow-hidden 2xl:grid-cols-2">
        <div className="col-span-1 float-left h-full w-full 2xl:w-1/2">
          <Heading text="Achievements">
            <div className="h-full w-40 pt-1">
              <div className="col-span-1 float-left w-full">
                💰{user.token_balance} Tokens
              </div>
            </div>
            <div className="h-full w-40 pt-1">
              <div className="col-span-1 float-left w-full">
                🏅{user.badge_count} Badges
              </div>
            </div>
          </Heading>
          <div className="mb-10">
            <div className="m-auto h-96 w-96">
              <Wheel steps={16} angle={st.angle} />
            </div>
            <button
              className="m-auto mt-10 block h-20 w-64 rounded-full bg-quinary"
              onClick={(e) => {
                spinTheWheel();
              }}
            >
              <p className="font-ibold font-bold">SPIN THE WHEEL</p>
              <p className="font-iregular">20 tokens💰</p>
            </button>
          </div>
        </div>

        <div className="col-span-1 float-right w-full 2xl:w-1/2 2xl:pl-6">
          <div>
            <Heading text="Latest Wins"></Heading>
            <div className="h-auto">{latestWinsComponents}</div>
          </div>

          <div className="mt-10">
            <Heading text="Awards"></Heading>
            <div className="mb-5 grid w-full grid-cols-4 pb-3">
              <div className="text-left">
                <p className="font-iregular">Name</p>
              </div>
              <div className="text-center">
                <p className="text-iregular">Qt/pax(max)</p>
              </div>
              <div className="text-center">
                <p className="text-iregular">Qt</p>
              </div>
              <div className="text-right">
                <p className="text-iregular pr-4">Probability</p>
              </div>
            </div>
            {prizeComponents}
          </div>
        </div>
      </div>
      {error && <ErrorMessage />}
      {wheelMessage}
    </Dashboard>
  );
}

export default withAuth(WheelPage);
