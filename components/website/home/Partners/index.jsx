import Image from "next/image";

import partners from "/data/partners";

export default function Partners() {
  return (
    <div className="spacing w-full bg-secondary pt-10 pb-10">
      <h2 className="py-10 text-center font-iextrabold text-5xl text-white lg:text-6xl">
        Partners who made this possible
      </h2>
      <div className="my-10 grid grid-cols-1 gap-10 lg:grid-cols-4">
        {partners.map((partner, i) => (
          <div
            className={`${partners.length == 2 && "col-span-2"}
                                     ${partners.length == 1 && "col-span-4"}
                                     m-auto grayscale filter hover:filter-none`}
            key={i}
          >
            <a href={partner.url} target="_blank" rel="noreferrer">
              <button>
                <Image
                  src={`/images/partners/${partner.image}`}
                  width="200"
                  height="200"
                />
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
