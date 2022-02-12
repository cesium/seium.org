import { useState } from "react";

import Image from "next/image";

import sponsors from "/data/sponsors.json";

function Tab({ tabName, selected, onSelect }) {
  const classes1 =
    "text-center w-60 font-imedium text-white text-lg md:text-2xl pt-3 cursor-pointer";
  const classes2 = "w-full pt-4 border-solid border-b-[10px]";

  if (selected) {
    return (
      <div className={classes1} onClick={onSelect}>
        {tabName}
        <div className={classes2} />
      </div>
    );
  }
  return (
    <div className={classes1} onClick={onSelect}>
      {tabName}
      <div className={`opacity-20 ${classes2}`} />
    </div>
  );
}

export default function Sponsors(props) {
  const [val, setValue] = useState(0);

  return (
    <div className="spacing bg-tertiary py-20 text-white">
      <h2 className="font-iextrabold xs:text-5xl flex justify-center py-10 text-center text-4xl sm:text-6xl md:text-8xl">
        Our amazing sponsors
      </h2>
      <div className="flex justify-center mt-10">
        <Tab
          tabName="Exclusive & Gold"
          selected={!val}
          onSelect={() => setValue(0)}
        />
        <Tab
          tabName="Silver & Bronze"
          selected={val}
          onSelect={() => setValue(1)}
        />
      </div>

      <div className="flex flex-col justify-center pt-10 sm:pt-20 lg:flex-row">
        {sponsors[val].map((elem, key) => {
          return (
            <div
              key={key}
              className={`${
                key == 1
                  ? "border-t-2 border-white lg:border-t-0 lg:border-l-2"
                  : undefined
              } w-[100%] lg:w-1/2`}
            >
              <div className="grid w-full grid-cols-1 place-items-center py-[5%] lg:py-0 lg:px-[10%]">
                <p className="font-iextrabold text-quinary pb-10 text-2xl lg:text-3xl">
                  {!val
                    ? key == 0
                      ? "Exclusive"
                      : "Gold"
                    : key == 0
                    ? "Silver"
                    : "Bronze"}
                </p>
                <div
                  className={`${
                    !val && key == 0 ? "grid-cols-1" : "grid-cols-2"
                  } grid gap-2 p-6 lg:gap-10`}
                >
                  {elem.map((sponsor, i) => {
                    return (
                      <a key={i} href={sponsor.link}>
                        <Image
                          src={`/images/sponsors/${sponsor.image}.svg`}
                          width={250}
                          height={66}
                          alt={sponsor.image}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
