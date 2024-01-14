import { useEffect, useState } from "react";

import speakers from "/data/speakers.json";

import Block from "./Block";

export default function Table(props) {
  const obj = speakers.find((obj) => obj.date === props.date);

  const [focused, updateFocused] = useState(-1);

  //reset focused element when changing date
  useEffect(() => {
    updateFocused(-1);
  }, [props.date]);

  //set focused element based on URL hash
  useEffect(() => {
    const onHashChanged = function () {
      const arr = window.location.hash.split("-");
      if (props.detailed && arr.length == 2) updateFocused(parseInt(arr[1]));
    };

    window.addEventListener("hashchange", onHashChanged);
    onHashChanged();

    return () => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, []);

  if (obj == undefined) return [];
  else
    return (
      <div className="flex flex-col">
        {obj.speakers.length == 0 && (
          <div className="text-center text-white">
            <p className="font-terminal-uppercase text-2xl">To be announced!</p>
          </div>
        )}
        {obj.speakers.map((speaker) => (
          <Block key={speaker} {...speaker} />
        ))}
      </div>
    );
}
