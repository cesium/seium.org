import UnderlineAnimation from "/components/website/utils/UnderlineAnimation";

export default function Title() {
  return (
    <div className="relative z-50 font-iextrabold">
      <h5 className="m-1 text-2xl text-quinary">Challenges</h5>
      <h1 className="relative z-0 w-11/12 text-6xl font-bold text-white md:w-full md:text-8xl xl:text-9xl 2xl:w-4/5">
        <span className="relative z-50">
          Participate in new challenges every{" "}
        </span>
        <UnderlineAnimation text="You can also win awards every day. But that's highly unlikely, I would say....">
          day
        </UnderlineAnimation>
      </h1>
    </div>
  );
}
