import { useRef, useState } from "react";
import { withAuth, useAuth, IAttendee } from "@context/Auth";
import Layout from "@components/Layout";
import Button from "@components/Button";
import Input from "@components/Input";
import Image from "next/image";

import { spinSlots } from "@lib/api";
import Balance from "@components/Balance";
import { Machine } from "./components";

function Slots() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [bet, setBet] = useState(null);
  const machineRef = useRef(null);

  const { user, refetchUser } = useAuth() as {
    user: IAttendee;
    refetchUser: () => void;
  };

  const spinReels = () => {
    console.log("====================================");
    console.log("HAS: " + user.token_balance);
    console.log("BET: " + bet);
    if (bet != null && bet > 0 && bet <= user.token_balance) {
      user.token_balance -= bet;
      setIsSpinning(true);
      spinSlots(bet).then((response) => {
        console.log(response);
        setIsSpinning(false);
        user.token_balance += response.tokens;
        console.log("NOW HAS: " + user.token_balance);
      });
    }
  };

  const canSpin = () => {
    return !isSpinning && bet != null && bet > 0 && bet <= user.token_balance;
  };

  return (
    <Layout title="Slots" description="Try your luck and multiply your tokens!">
      <div>💰 {user.token_balance} Tokens</div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="col-span-2">
          <Machine ref={machineRef} />
        </div>
        <div className="row-start-2">
          <div className="flex select-none rounded-full ring-2 ring-quinary">
            <input
              value={bet}
              onChange={(e) => setBet(e.target.value.replace(/[^0-9]/g, ""))}
              className="ml-8 h-16 w-28 bg-transparent uppercase outline-none placeholder:text-white/30"
              placeholder="Tokens"
            ></input>
            <Button
              className="block h-16 w-24 cursor-pointer bg-quinary text-primary/40"
              disabled={false}
              onClick={spinSlots}
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
      </div>
    </Layout>
  );
}

export default withAuth(Slots);
