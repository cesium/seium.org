import UnderlineAnimation from "/components/website/utils/UnderlineAnimation";

export default function Title() {
  return (
    <div className="relative z-20 font-bold">
      <h5 className="m-1 font-iextrabold text-2xl text-quinary">
        15-20 February 2022
      </h5>
      <h1 className="relative z-20 w-11/12 font-iextrabold text-5xl text-white md:w-full md:text-8xl xl:text-9xl 2xl:w-5/6">
        <span className="relative z-20">
          The software engineering week is back, let&apos;s just&nbsp;
        </span>
        <UnderlineAnimation
          text="Did you see what I did there?"
          afterText="that."
        >
          SEI
        </UnderlineAnimation>
      </h1>
    </div>
  );
}
