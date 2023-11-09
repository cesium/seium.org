import { useState, useEffect } from "react";

import { withAuth, useAuth } from "@context/Auth";

import * as api from "@lib/api";

import { Prizes, Redeemables, StoreEmpty, WheelEmpty } from "./components";

import Layout from "@components/Layout";
import Balance from "@components/Balance";

function Inventory() {
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
    <Layout
      title="Inventory"
      description="Check the prizes that you have accumulated throughout the week"
    >
      <div className="my-5">
        <button
          className={`font-iregular bg-${
            tab ? "quinary" : "white"
          } h-12 items-center rounded-full px-4 py-1 text-center text-black`}
          onClick={(e) => {
            updateTab(true);
          }}
        >
          STORE
        </button>
        <button
          className={`font-iregular bg-${
            tab ? "white" : "quinary"
          } ml-12 h-12 items-center rounded-full px-4 py-1 text-center text-black`}
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
          {user.redeemables.length !== 0 ? (
            <Redeemables products={user.redeemables} />
          ) : (
            <StoreEmpty products={products} />
          )}
        </div>
      ) : (
        <div>
          {user.prizes.length !== 0 ? (
            <Prizes products={user.prizes} />
          ) : (
            <WheelEmpty products={prizes} />
          )}
        </div>
      )}
    </Layout>
  );
}

export default withAuth(Inventory);
