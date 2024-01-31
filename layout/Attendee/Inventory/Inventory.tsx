import { withAuth, useAuth, IAttendee } from "@context/Auth";

import { Prize, Redeemable, Empty } from "./components";

import Layout from "@components/Layout";
import Balance from "@components/Balance";

function Inventory() {
  const { user } = useAuth() as { user: IAttendee };

  const items = user.redeemables
    .map((product) => ({ ...product, is_product: true }))
    .concat(user.prizes.map((prize) => ({ ...prize, is_product: false })))
    .filter((item) => item.is_redeemable || item.is_product);

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
      {items.length == 0 ? (
        <Empty />
      ) : (
        <div>
          <ul
            role="list"
            className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200"
          >
            {items.map((item) =>
              item.is_product ? (
                <Redeemable product={item} />
              ) : (
                <Prize product={item} />
              )
            )}
          </ul>
        </div>
      )}
    </Layout>
  );
}

export default withAuth(Inventory);
