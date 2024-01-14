import Image from "next/image";

import partners from "/data/partners";

export default function Partners() {
  return (
    <div className="spacing w-full bg-secondary pt-20 pb-20">
      <h2 className="font-terminal-uppercase select-none py-10 text-center text-5xl text-white lg:text-6xl">
        Partners who made this possible
      </h2>
      <div className="my-10 flex flex-wrap items-center justify-center gap-10">
        {partners.map((partner, i) => (
          <div
            className="m-auto w-40 select-none grayscale filter transition-all hover:filter-none"
            key={i}
          >
            <a href={partner.url} target="_blank" rel="noreferrer">
              <Image
                src={`/images/partners/${partner.image}`}
                width="300"
                height="300"
                alt={partner.name}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
