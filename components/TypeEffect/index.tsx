import TypeWriter from "typewriter-effect";

export default function TypeEffect() {
    return (
        <TypeWriter
            aria-hidden
            onInit={(typewriter) => {
                typewriter
                    .typeString("The software engineering week is back, let's ")
                    .typeString("<span style='white-space: nowrap;'>just say</span>") // since this lib do not accept "&nbsp;", css "white-space: nowrap" will do the same
                    .pauseFor(200)
                    .deleteChars(3)
                    .typeString("<u style='text-underline-offset: 8px;'>SEI</u>")
                    .typeString(" that.")
                    .start();
            }}
            options={{
                delay: 25,
                cursor: "_",
                cursorClassName:
                    "text-5xl animate-[typewriter-cursor-pulse_1s_steps(1)_infinite] sm:text-5xl md-text-6xl lg:text-7xl",
            }}
        />
    );
};
