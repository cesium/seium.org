import { useState, useEffect } from "react";

import { withAuth, useAuth } from "/components/Auth";

import * as api from "/lib/api";

import Dashboard from "/components/moonstone/user/utils/Dashboard";

import Balance from "/components/moonstone/user/store/Balance";
import Product from "/components/moonstone/user/store/Product";

function Store() {
  const { user } = useAuth();

  const [products, setProducts] = useState(null);

  useEffect(() => {
    api.getProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Dashboard
      href="store"
      title="Store"
      description="Buy products with your collected tokens"
    >
      <div className="mt-5">
        <Balance
          token_balance={user.token_balance}
          badge_count={user.badge_count}
        />
      </div>

      <div className="mt-10 grid grid-cols-1 justify-items-center gap-y-8 gap-x-2 lg:grid-cols-2 xl:grid-cols-3">
        {products &&
          products
            .filter((a) => a.can_buy > 0)
            .sort((a, b) => a.name < b.name)
            .map((product) => (
              <div key={product.id}>
                <Product
                  name={product.name}
                  id={product.id}
                  image={product.image}
                  price={product.price}
                  enabled={product.can_buy != 0}
                />
              </div>
            ))}

        {products &&
          products
            .filter((a) => a.can_buy <= 0)
            .sort((a, b) => a.name < b.name)
            .map((product) => (
              <div key={product.id}>
                <Product
                  name={product.name}
                  id={product.id}
                  image={product.image}
                  price={product.price}
                  enabled={product.can_buy != 0}
                />
              </div>
            ))}
      </div>
    </Dashboard>
  );
}

export default withAuth(Store);
