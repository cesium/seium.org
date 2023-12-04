import { useState, useEffect } from "react";

import { withAuth, useAuth } from "@context/Auth";

import { getProducts, getWheelPrizes } from "@lib/api";

import { Prize, Redeemable } from "./components";

import Layout from "@components/Layout";
import Balance from "@components/Balance";

function Inventory() {
  const { user } = useAuth();

  const items = user.redeemables
    .map((v) => ({ ...v, is_product: true }))
    .concat(user.prizes.map((v) => ({ ...v, is_product: false })));

  return (
    <Layout
      title="Inventory"
      description="Check the prizes that you have accumulated throughout the week"
    >
      <div className="mt-5">
        <Balance
          token_balance={user.token_balance}
          badge_count={user.badge_count}
        />
      </div>
      <div>
        <ul
          role="list"
          className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200"
        >
          {items
            .filter((item) => item.is_redeemable || item.is_product)
            .map((item) =>
              item.is_product ? (
                <Redeemable product={item} />
              ) : (
                <Prize product={item} />
              )
            )}
        </ul>
      </div>
    </Layout>
  );
}

export default withAuth(Inventory);
