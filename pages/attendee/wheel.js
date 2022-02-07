import { useState, useEffect } from "react";
import { withAuth, useAuth } from "/components/Auth";

import Heading from "/components/moonstone/utils/Heading";

import Dashboard from "/components/moonstone/user/utils/Dashboard";

import ListItem3 from "/components/moonstone/user/wheel/ListItem3Cols";
import ListItem4 from "/components/moonstone/user/wheel/ListItem4Cols";
import Wheel from "/components/moonstone/user/wheel/Wheel";

import { getWheelPrizes, getWheelLatestWins, spinWheel } from "/lib/api";

function WheelPage() {
  const defaultState = {
    angle: 0,
    speed: 0,
  };
  const angleSpeed = 20;
  const fps = 60;
  const [st, updateState] = useState(defaultState);

  const { attendee } = useAuth();

  const [prizes, updatePrizes] = useState([]);
  const [latestWins, updateLatestWins] = useState([]);

  useEffect(() => {
    getWheelPrizes()
      .then((response) => updatePrizes(response.data))
      .catch(); //TODO

    getWheelLatestWins()
      .then((response) => updateLatestWins(response.data))
      .catch(); //TODO
  }, [prizes]);

  const changeState = () => {
    updateState({
      angle: (st.angle + st.speed) % 360,
      speed: st.speed - 0.1,
    });
  };

  //Rotate at 60fps
  useEffect(() => {
    console.log(st.angle);
    if (st.speed > 0) setTimeout(changeState, 1000 / 60);
  }, [st]);

  const play = () => {
    spinWheel()
      .then((response) => {})
      .catch();
  };

  const prizeComponents = prizes.map((entry, id) => (
    <ListItem4
      prob="2.00%"
      id={id}
      name={entry.name}
      qnty={entry.stock}
      maxQnty={max_amount_per_attendee}
    />
  ));

  const latestWinsComponents = latestWins.map((entry, id) => (
    <ListItem3
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
      {JSON.stringify(attendee)}
      <div className="mt-12 grid-cols-1 overflow-hidden 2xl:grid-cols-2">
        <div className="col-span-1 float-left h-full w-full 2xl:w-1/2">
          <Heading text="Achievements">
            <div className="h-full w-40 pt-1">
              <div className="col-span-1 float-left w-full">💰170 Tokens</div>
            </div>
            <div className="h-full w-40 pt-1">
              <div className="col-span-1 float-left w-full">🏅68 Badges</div>
            </div>
          </Heading>
          <div className="mb-10">
            <div className="m-auto h-96 w-96">
              <Wheel steps={16} angle={st.angle} />
            </div>
            <button
              className="m-auto mt-10 block h-20 w-64 rounded-full bg-quinary"
              onClick={(e) => {
                updateState({ angle: 0, speed: angleSpeed });
                play();
              }}
            >
              <p className="font-ibold font-bold">SPIN THE WHEEL</p>
              <p className="font-iregular">15 tokens💰</p>
            </button>
          </div>
        </div>

        <div className="col-span-1 float-right w-full 2xl:w-1/2 2xl:pl-6">
          <div>
            <Heading text="Latest Wins"></Heading>
            <div className="h-72">{latestWinsComponents}</div>
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
    </Dashboard>
  );
}

export default withAuth(WheelPage);
