import UnderlineAnimation from "@components/UnderlineAnimation";

export default function Title() {
  return (
    <div className="relative z-50 font-bold">
      <h5 className="font-terminal-uppercase m-1 text-2xl text-quinary">
        Schedule
      </h5>
      {/* 2xl:leading-[6.5rem] is intended to only work with the following font - Terminal */}
      <h1 className="font-terminal-uppercase relative z-0 w-11/12 text-4xl text-white xs:text-5xl sm:text-6xl md:w-full md:text-7xl lg:text-8xl 2xl:w-5/6 2xl:leading-[5.5rem]">
        Four awesome days of learning, sharing and&nbsp;
        <UnderlineAnimation
          text="Or maybe losing. This one is kind of optional."
          afterText=""
        >
          winning
        </UnderlineAnimation>
      </h1>
    </div>
  );
}
