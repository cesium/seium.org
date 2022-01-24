import UnderlineAnimation from "/components/website/utils/UnderlineAnimation";

export default function Title() {
  return (
    <div className="relative z-50 font-bold">
      <h5 className="m-1 font-iextrabold text-2xl text-quinary">Schedule</h5>
      <h1 className="relative z-0 w-11/12 font-iextrabold text-6xl text-white md:w-full md:text-8xl xl:text-9xl 2xl:w-4/5">
        Five awesome days of learning, sharing and
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
