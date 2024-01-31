import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { getProduct, buyProduct } from "@lib/api";

import { withAuth, useAuth } from "@context/Auth";

import Balance from "@components/Balance";
import Button from "@components/Button";
import Layout from "@components/Layout";

interface IUserWithBalance {
  token_balance: number;
  badge_count: number;
}

function ProductSlug() {
  // TODO: add type to product
  const [product, updateProduct] = useState<any>({});
  const router = useRouter();
  const { user, refetchUser } = useAuth() as {
    user: IUserWithBalance;
    refetchUser: () => void;
  };

  const [needsUpdate, updateProductInfo] = useState(false);

  useEffect(() => {
    getProduct(router.query.slug)
      .then((response) => {
        updateProduct(response.data.data);
      })
      .catch((_) => router.replace("/404"));
  }, [router, needsUpdate]);

  const message =
    product.can_buy != 0
      ? `You can redeem ${product.can_buy} more`
      : "You already reached the redeem limit";

  return (
    <Layout title="Store">
      <Balance
        token_balance={user.token_balance}
        badge_count={user.badge_count}
      />

      <div className="bg-primary">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Product details */}
          <div className="select-none lg:max-w-lg lg:self-end">
            <Link
              href="/attendee/store"
              className="text-center font-imedium text-quinary"
            >
              &lt; Back to store
            </Link>

            <div className="mt-4">
              <h1 className="font-terminal-uppercase text-6xl tracking-tight text-white">
                {product.name}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <div className="mt-4 space-y-6">
                <p className="text-lg text-gray-500">{product.description}</p>
              </div>
            </section>
          </div>

          {/* Product image */}
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full select-none object-cover object-center"
              />
            </div>
          </div>

          {/* Product form */}
          <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" className="sr-only">
                Product options
              </h2>

              <div className="mt-10">
                {product.can_buy > 0 && product.stock > 0 && (
                  <Button
                    onClick={() =>
                      buyProduct(product.id).then(() => {
                        updateProductInfo((needsUpdate) => !needsUpdate);
                        refetchUser();
                      })
                    }
                    className="m-auto block h-20 w-full rounded-full bg-quinary hover:opacity-75 disabled:bg-gray-400 disabled:opacity-75"
                    disabled={user.token_balance < product.price}
                    title="REDEEM"
                    description={`${product.price} tokens 💰`}
                    bold={true}
                  />
                )}
              </div>
              <div className="mt-6 text-center">
                <p className="font-ibold font-bold text-white">
                  {product.stock} available
                </p>
                <p className="font-iregular text-white">{message}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(ProductSlug);
