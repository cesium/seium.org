import UnderlineAnimation from "/components/website/utils/UnderlineAnimation";

export default function Title() {
  return (
    <div className="relative z-50 font-bold">
      <h5 className="m-1 text-2xl font-iextrabold text-quinary">Schedule</h5>
      <h1 className="relative z-0 w-11/12 text-6xl text-white font-iextrabold md:text-8xl md:w-full xl:text-9xl 2xl:w-4/5">
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
