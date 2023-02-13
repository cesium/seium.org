import UnderlineAnimation from "@components/UnderlineAnimation";

export default function Title() {
  return (
    <div className="font-terminal-uppercase relative z-50">
      <h5 className="m-1 text-2xl text-quinary">Challenges</h5>
      {/* 2xl:leading-[6.5rem] is intended to only work with the following font - Terminal */}
      <h1 className="font-terminal-uppercase relative z-0 w-11/12 text-5xl text-white sm:text-6xl md:w-full md:text-8xl xl:text-9xl 2xl:w-4/5 2xl:leading-[6.5rem]">
        <span className="relative z-50">
          Participate in new challenges every{" "}
        </span>
        <UnderlineAnimation text="You can also win awards every day. But that's highly unlikely, I would say...">
          day
        </UnderlineAnimation>
      </h1>
    </div>
  );
}
