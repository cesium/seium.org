import { useState, useEffect } from "react";
import Link from "next/link";

import { getProducts, getWheelPrizes } from "@lib/api";
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Empty() {
  const [suggestion] = useState(() =>
    Math.random() < 0.5 ? "store" : "wheel"
  );

  return (
    <div className="mx-auto max-w-lg">
      <div className="mt-10">
        <div className="text-center">
          <p className="mt-1 font-iregular text-lg">
            You haven't won any prizes or purchased any items yet!
          </p>
          {suggestion === "store" ? (
            <>
              <p className="mt-1 font-iregular text-lg">
                Visit the store to trade your tokens for prizes, here is a
                selection of items available for purchase.
              </p>
              <StorePrizes />
              <Link
                href={"/attendee/store"}
                className="m-auto mt-10 flex h-16 w-48 cursor-pointer select-none grid-cols-2 items-center justify-around rounded-full bg-quinary hover:opacity-90"
              >
                <p className="w-3/4 self-center font-iregular text-lg uppercase">
                  Store
                </p>
                <ArrowRightIcon className="mx-6 my-3 w-1/5" />
              </Link>
            </>
          ) : (
            <>
              <p className="mt-1 font-iregular text-lg">
                Try your luck at the wheel for a chance to win some of these
                prizes.
              </p>
              <WheelPrizes />
              <Link
                href={"/attendee/wheel"}
                className="m-auto mt-10 flex h-16 w-48 cursor-pointer select-none grid-cols-2 items-center justify-around rounded-full bg-quinary hover:opacity-90"
              >
                <p className="w-3/4 self-center font-iregular text-lg uppercase">
                  Wheel
                </p>
                <ArrowRightIcon className="mx-6 my-3 w-1/5" />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function WheelPrizes() {
  const [prizes, updatePrizes] = useState([]);

  useEffect(() => {
    getWheelPrizes().then((response) => updatePrizes(response.data));
  }, []);

  return (
    <ul
      role="list"
      className="mt-4 mb-14 divide-y divide-gray-200 border-t border-b border-gray-200"
    >
      {prizes &&
        prizes
          .slice(0, 3)
          .filter((prize) => prize.stock >= 0)
          .map((prize) => (
            <li
              key={prize.id}
              className="flex items-center justify-between space-x-3 py-4"
            >
              <div className="flex min-w-0 flex-1 items-center space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={prize.avatar}
                    alt={prize.name}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white">
                    {prize.name}
                  </p>
                </div>
              </div>
            </li>
          ))}
    </ul>
  );
}

function StorePrizes() {
  const [products, updateProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => updateProducts(response.data));
  }, []);

  return (
    <ul
      role="list"
      className="mt-4 mb-14 divide-y divide-gray-200 border-t border-b border-gray-200"
    >
      {products &&
        products
          .slice(0, 3)
          .filter((product) => product.stock >= 0)
          .map((product) => (
            <li
              key={product.id}
              className="flex items-center justify-between space-x-3 py-4"
            >
              <div className="flex min-w-0 flex-1 items-center space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white">
                    {product.name}
                  </p>
                  <p className="truncate text-sm font-medium text-white">
                    {" "}
                    💰 {product.price}{" "}
                  </p>
                </div>
              </div>
            </li>
          ))}
    </ul>
  );
}
