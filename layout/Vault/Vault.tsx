import { useState, useEffect } from "react";

import { withAuth, useAuth } from "@context/Auth";

import * as api from "@lib/api";

import { Prizes, Redeemables, StoreEmpty, WheelEmpty } from "./components";

import Dashboard from "@components/Dashboard";
import Balance from "@components/Balance";

function Vault() {
  const { user } = useAuth();

  const [tab, updateTab] = useState(true);
  const [products, setProducts] = useState(null);
  const [prizes, updatePrizes] = useState([]);

  useEffect(() => {
    api.getProducts().then((response) => {
      setProducts(response.data);
    });
    api.getWheelPrizes().then((response) => updatePrizes(response.data));
  }, []);

  return (
    <Dashboard
      href="vault"
      title="Vault"
      description="Check the prizes that you have accumulated throughout the week"
    >
      <div className="mt-5">
        <button
          className={`font-iregular bg-${
            tab ? "quinary" : "white"
          } h-12 items-center rounded-full px-4 py-1 text-center`}
          onClick={(e) => {
            updateTab(true);
          }}
        >
          STORE
        </button>
        <button
          className={`font-iregular bg-${
            tab ? "white" : "quinary"
          } ml-12 h-12 items-center rounded-full px-4 py-1 text-center`}
          onClick={(e) => {
            updateTab(false);
          }}
        >
          WHEEL
        </button>
      </div>

      <div className="mt-5">
        <Balance
          token_balance={user.token_balance}
          badge_count={user.badge_count}
        />
      </div>

      {tab ? (
        <div>
          {user.redeemables.length != 0 ? (
            <Redeemables products={user.redeemables} />
          ) : (
            <StoreEmpty products={products} />
          )}
        </div>
      ) : (
        <div>
          {user.redeemables.length != 0 ? (
            <Prizes products={user.prizes} />
          ) : (
            <WheelEmpty products={prizes} />
          )}
        </div>
      )}
    </Dashboard>
  );
}

export default withAuth(Vault);
