import TypeWriter from "typewriter-effect";

export default function Title() {
  return (
    <div className="relative z-20 font-bold">
      <h5 className="font-terminal-uppercase m-1 text-2xl text-quinary">
        14-17 February 2023
      </h5>
      {/* 2xl:leading-[6.5rem] is intended to only work with the following font - Terminal */}
      <h1 className="font-terminal-uppercase h-72 w-11/12 text-4xl text-white xs:text-5xl sm:text-6xl md:h-96 md:w-full md:text-7xl lg:text-8xl 2xl:w-5/6 2xl:text-9xl 2xl:leading-[6.5rem]">
        <TypeWriter
          onInit={(typewriter) => {
            typewriter
              .typeString("The ")
              .typeString("sotware")
              .changeDeleteSpeed(20)
              .pauseFor(100)
              .deleteChars(7)
              .typeString("<span>software<br/>engeen</span>")
              .deleteChars(3)
              .typeString("<span>ineering week is back, let&apos;s  </span>")
              .typeString("<span style='white-space: nowrap;'>just say</span>") // since this lib do not accept "&nbsp;", css "white-space: nowrap" will do the same
              .pauseFor(400)
              .deleteChars(3)
              .typeString("<u style='text-underline-offset: 8px;'>SEI</u>")
              .typeString(" that.")
              .start();
          }}
          options={{
            delay: 50,
          }}
        />
      </h1>
    </div>
  );
}
