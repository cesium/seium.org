import { useState, useEffect } from "react";

import { withAuth, useAuth } from "/components/Auth";

import * as api from "/lib/api";

import StoreEmpty from "/components/moonstone/user/vault/store/Empty";
import Redeemables from "/components/moonstone/user/vault/store/Redeemables";
import WheelEmpty from "/components/moonstone/user/vault/wheel/Empty";
import Prizes from "/components/moonstone/user/vault/wheel/Prizes";

import Dashboard from "/components/moonstone/user/utils/Dashboard";

import Balance from "/components/moonstone/user/store/Balance";

function Vault() {
  const { user } = useAuth();

  const [tab, updateTab] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    api.getProducts().then((response) => {
      setProducts(response.data);
    });
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
            <WheelEmpty products={products} />
          )}
        </div>
      )}
    </Dashboard>
  );
}

export default withAuth(Vault);
