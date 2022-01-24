import { useState } from "react";
import Button from "/components/utils/Button";

import List from "../../List";

function Action({ text, url }) {
  return (
    <div className="mt-5 w-60">
      <Button
        onClick={(e) => (window.location.href = url)}
        text={text}
        customStyle="text-white bg-primary border-tertiary hover:bg-tertiary"
      />
    </div>
  );
}

export default function Challenge({ title, description, prizes, rules }) {
  return (
    <div className="sticky top-0 mb-24 grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block">
        <List title={title} />
      </div>
      <div>
        <h2 className="font-iextrabold text-3xl text-white md:text-4xl xl:text-5xl">
          {title}
        </h2>
        <p className="mt-10 font-iregular text-white">{description}</p>

        <div>
          <h3 className="text-ibold md:text-md xl:text-md mt-5 mb-3 text-xl text-white ">
            Awards 🏆
          </h3>
          <p>
            <a href={prizes[0].url} className="text-iregular text-quinary">
              1<sup>st</sup> place - {prizes[0].name}
            </a>
          </p>
          <p>
            <a href={prizes[1].url} className="text-iregular text-quinary">
              2<sup>nd</sup> place - {prizes[1].name}
            </a>
          </p>
          <p>
            <a href={prizes[2].url} className="text-iregular text-quinary">
              3<sup>rd</sup> place - {prizes[2].name}
            </a>
          </p>
        </div>

        {rules != null && <Action text="READ THE RULES" url="" />}
      </div>
    </div>
  );
}
