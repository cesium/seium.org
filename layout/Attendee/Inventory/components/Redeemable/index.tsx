import { CheckIcon, ClockIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function Redeemable({ product }) {
  return (
    <li key={product.id} className="flex py-6">
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col sm:ml-6">
        <div>
          <div className="flex justify-between">
            <h4 className="text-sm">
              <div className="font-medium text-white hover:text-gray-200">
                <Link
                  href={`/product/${product.id}`}
                  className="enabled group relative cursor-pointer opacity-100"
                >
                  {product.name}
                </Link>
              </div>
            </h4>
            <p className="ml-4 text-lg font-medium text-white">
              {" "}
              {product.quantity}{" "}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          <p className="mt-4 truncate text-sm font-medium text-white">
            💰 {product.price}
          </p>
        </div>

        <div className="mt-4 flex flex-1 items-end justify-between">
          <p className="flex items-center space-x-2 text-sm text-white">
            {product.not_redeemed == 0 ? (
              <CheckIcon
                className="h-5 w-5 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
            ) : (
              <ClockIcon
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                aria-hidden="true"
              />
            )}
            <span>
              {product.not_redeemed == 0
                ? "Delivered"
                : `Go to the acreditation to pick up your purchase`}
            </span>
          </p>
        </div>
      </div>
    </li>
  );
}
