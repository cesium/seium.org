import { CheckIcon, ClockIcon } from "@heroicons/react/solid";

export default function Redeemables({ products }) {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-200 border-t border-b border-gray-200"
    >
      {products.map((product) => (
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
                  <div className="font-medium text-gray-700 hover:text-gray-800">
                    {product.name}
                  </div>
                </h4>
                <p className="ml-4 text-lg font-medium text-gray-900">
                  {" "}
                  {product.quantity}{" "}
                </p>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {product.description}
              </p>
              <p className="mt-4 truncate text-sm font-medium text-gray-600">
                💰 {product.price}
              </p>
            </div>

            <div className="mt-4 flex flex-1 items-end justify-between">
              <p className="flex items-center space-x-2 text-sm text-gray-700">
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
      ))}
    </ul>
  );
}
