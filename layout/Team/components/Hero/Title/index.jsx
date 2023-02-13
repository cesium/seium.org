export default function Title() {
  return (
    <div className="font-terminal-uppercase relative z-50">
      <h5 className="text-2xl text-quinary">Team</h5>
      {/* 2xl:leading-[6.5rem] is intended to only work with the following font - Terminal */}
      <h1 className="relative z-0 text-6xl text-white md:w-4/5 lg:text-8xl 2xl:text-9xl 2xl:leading-[6.5rem]">
        CeSIUM has teamed up with the best team possible.
      </h1>
    </div>
  );
}
