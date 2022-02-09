export default function WheelEmpty({ products }) {
  return (
    <div className="mx-auto max-w-lg">
      <div className="mt-10">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h2 className="mt-2 text-lg font-medium text-gray-900">Win Prizes</h2>
          <p className="mt-1 text-sm text-gray-500">
            You haven’t won any prizes from the wheel yet. Gamble your tokens
            wisely.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Prizes that you can still win
        </h3>
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
                      <p className="truncate text-sm font-medium text-gray-900">
                        {product.name}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}
