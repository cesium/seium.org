import { useState } from "react";

export default function Title() {
  const [hovered, setHover] = useState(false);
  return (
    <div className="relative z-50 font-iextrabold">
      <h5 className="m-1 text-2xl text-quinary">Hackathon</h5>
      <h1 className="relative z-0 w-11/12 text-6xl font-bold text-white md:w-full md:text-8xl xl:text-9xl 2xl:w-4/5">
        Create products, train skills and learn new technologies.
      </h1>
    </div>
  );
}
