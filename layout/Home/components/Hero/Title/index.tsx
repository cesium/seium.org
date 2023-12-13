import schedule from "@data/schedule.json";
import UnderlineAnimation from "@components/UnderlineAnimation";
import dayjs from "dayjs";
import { motion as Motion } from "framer-motion";

export default function Title() {
  /* Parse event dates info from schedule data */
  const dates = schedule.map((day) => day.date).sort();

  const firstDayDate = dayjs(dates[0], "YYYY/M/D");
  const lastDayDate = dayjs(dates[dates.length - 1], "YYYY/M/D");

  const month = firstDayDate.format("MMMM");
  const year = firstDayDate.format("YYYY");

  return (
    <div className="relative z-20 font-bold">
      <h5 className="font-terminal-uppercase m-1 text-2xl text-quinary">
        {firstDayDate.format("D")}-{lastDayDate.format("D")} {month} {year}
      </h5>
      {/* 2xl:leading-[6.5rem] is intended to only work with the following font - Terminal */}
      <Motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-terminal-uppercase relative z-20 w-11/12 text-4xl text-white xs:text-5xl sm:text-6xl md:w-full md:text-7xl lg:text-8xl 2xl:w-5/6 2xl:text-9xl 2xl:leading-[6.5rem]">
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
      </Motion.div>
    </div>
  );
}
