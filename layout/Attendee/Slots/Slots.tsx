import { useRef, useState } from "react";
import { withAuth, useAuth, IAttendee } from "@context/Auth";
import Layout from "@components/Layout";
import Button from "@components/Button";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { spinSlots } from "@lib/api";
import Balance from "@components/Balance";
import { Machine, SlotsMessage } from "./components";
import Paytable from "./components/Paytable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Slots() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [bet, setBet] = useState(null);
  const machineRef = useRef<any>(null);
  const [slotsMessage, updateSlotsMessage] = useState(<></>);

  const { user } = useAuth() as {
    user: IAttendee;
    refetchUser: () => void;
  };

  const spinReels = async () => {
    if (bet != null && bet > 0 && bet <= user.token_balance) {
      user.token_balance -= bet;
      setIsSpinning(true);
      const response = await spinSlots(bet);
      await machineRef.current.rollAll(response.multiplier);
      setIsSpinning(false);
      user.token_balance += response.tokens;
      switch (response.multiplier) {
        case 0:
          break;
        case 1:
          updateSlotsMessage(
            <SlotsMessage
              title="Bet refunded!"
              description={`Phew, your bet was refunded! Will you try your luck with another spin?`}
              onExit={(_) => updateSlotsMessage(null)}
            />
          );
          break;
        default:
          updateSlotsMessage(
            <SlotsMessage
              title="You won tokens!"
              description={`Congratulations! You won ${response.tokens} tokens!`}
              onExit={(_) => updateSlotsMessage(null)}
            />
          );
          break;
      }
    }
  };

  const showPaytable = () => {
    updateSlotsMessage(<Paytable onExit={(_) => updateSlotsMessage(null)} />);
  };

  const setMaxBet = () => {
    setBet(user.token_balance.toString());
  };

  const canSpin = () => {
    return !isSpinning && bet != null && bet > 0 && bet <= user.token_balance;
  };

  return (
    <Layout title="Slots" description="Try your luck and multiply your tokens!">
      <div className="mt-4">
        <Balance
          token_balance={user.token_balance}
          badge_count={user.badge_count}
        />
      </div>
      <div className="mt-8 space-y-8">
        <div className="col-span-2">
          <Machine ref={machineRef} />
        </div>
        <div className="row-start-2">
          <div className="m-auto flex w-64 select-none rounded-full ring-2 ring-quinary">
            <input
              value={bet}
              onChange={(e) => setBet(e.target.value.replace(/[^0-9]/g, ""))}
              className="ml-8 h-16 w-28 bg-transparent uppercase outline-none placeholder:text-white/30"
              placeholder="Tokens"
            ></input>
            <Button
              className="block h-16 w-full cursor-pointer bg-quinary text-primary/40"
              disabled={false}
              onClick={setMaxBet}
              title="MAX"
              bold={false}
            />
          </div>
        </div>
        <div className="row-start-2">
          <Button
            className={`${
              canSpin() ? "cursor-pointer bg-quinary" : "bg-gray-400 opacity-50"
            } block h-16 w-64`}
            disabled={!canSpin()}
            onClick={spinReels}
            title="SPIN"
            bold={true}
          />
        </div>
        <div className="w-full text-center">
          <a
            className="cursor-pointer text-center text-quinary hover:underline"
            onClick={showPaytable}
          >
            <FontAwesomeIcon className="px-2" icon={faArrowUpRightFromSquare} />
            See Paytable
          </a>
        </div>
      </div>
      {slotsMessage}
    </Layout>
  );
}

export default withAuth(Slots);
