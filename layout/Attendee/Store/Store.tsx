import { useState, useEffect } from "react";

import { withAuth, useAuth, IAttendee } from "@context/Auth";

import * as api from "@lib/api";

// import Dashboard from "../components/Dashboard";
import Layout from "@components/Layout";

import Balance from "@components/Balance";
import { Product } from "./components";

function Store() {
  const { user } = useAuth() as { user: IAttendee };

  const [products, setProducts] = useState(null);

  useEffect(() => {
    api.getProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Layout title="Store" description="Buy products with your collected tokens">
      <div className="w-full font-semibold uppercase text-quinary">
        <p>*subject to existing stock</p>
      </div>
      <div className="mt-5 text-white">
        <Balance
          token_balance={user.token_balance}
          badge_count={user.badge_count}
        />
      </div>
      <div className="mt-10 grid grid-cols-1 justify-items-center gap-x-10 gap-y-14 text-white xs:grid-cols-2 md:gap-y-20 2xl:grid-cols-3">
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
    </Layout>
  );
}

export default withAuth(Store);
