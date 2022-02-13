import Link from "next/link";

export default function Product({ name, id, image, price, enabled }) {
  return (
    <button>
      <Link
        href={`/product/${id}`}
        className={enabled ? "opacity-100" : "opacity-50"}
      >
        <div key={id} className="group relative">
          <div
            href={`/product/${id}`}
            className={enabled ? "opacity-100" : "opacity-50"}
          >
            <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="font-ibold text-lg text-primary">
                <span aria-hidden="true" className="absolute inset-0" />
                {name}
              </h3>
            </div>
            <p className="font-imedium text-lg text-tertiary"> 💰 {price}</p>
          </div>
        </div>
      </Link>
    </button>
  );
}
