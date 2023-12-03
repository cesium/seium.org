import { TypeEffect } from "@components/TypeEffect";

export default function Title() {


  return (
    <div className="relative z-20 font-bold">
      <h5 className="font-terminal-uppercase m-1 text-2xl text-quinary">
        14-17 February 2023
      </h5>
      {/* 2xl:leading-[6.5rem] is intended to only work with the following font - Terminal */}
      <div
        aria-label="The software engineering week is back, let's just SEI that."
        className="font-terminal-uppercase h-72 w-11/12 text-4xl text-white xs:text-5xl sm:text-6xl md:h-96 md:w-full md:text-7xl lg:text-8xl 2xl:w-5/6 2xl:leading-[6.5rem]"
      >
          <TypeEffect />
      </div>
    </div>
  );
}
