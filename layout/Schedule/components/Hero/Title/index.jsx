import UnderlineAnimation from "@components/UnderlineAnimation";

export default function Title() {
  return (
    <div className="relative z-50 font-bold">
      <h5 className="m-1 font-iextrabold text-2xl text-quinary">Schedule</h5>
      <h1 className="relative z-0 w-11/12 font-iextrabold text-4xl text-white xs:text-5xl sm:text-6xl md:w-full md:text-7xl lg:text-8xl 2xl:w-5/6">
        Four awesome days of learning, sharing and
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
