import Link from "next/link";

export default function Product({ name, id, image, price, enabled }) {
  return (
    <Link
      href={`/product/${id}`}
      className={`group relative cursor-pointer ${
        enabled ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className={enabled ? "opacity-100" : "opacity-50"}>
        <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
          <img
            src={image}
            alt={name}
            className="h-full w-full select-none object-cover object-center lg:h-full lg:w-full"
          />
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="font-ibold text-lg text-white">{name}</p>
        <p className="font-imedium text-lg text-white"> 💰 {price}</p>
      </div>
    </Link>
  );
}
