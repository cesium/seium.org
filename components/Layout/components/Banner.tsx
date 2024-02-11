import { ISpotlight, useNotify } from "@context/Notification";
import { displayRemainingTime } from "@lib/time";
import { motion as Motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

function PlainBanner({ spotlight }: { spotlight: ISpotlight }) {
  const [remaining, setRemaining] = useState(
    displayRemainingTime(spotlight.end)
  );

  useEffect(() => {
    const timerID = setInterval(() => {
      setRemaining(displayRemainingTime(spotlight.end));
    }, 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <Link href={`/badge/${spotlight.badge_id}`}>
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-quaternary bg-opacity-75 px-6 py-3 text-white sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-base leading-6">
            <strong className="text-lg font-semibold">
              {spotlight.name} is on spotlight!
            </strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            Visit them now to get extra tokens
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <strong className="flex-none py-1 text-lg font-semibold shadow-sm">
              {remaining}
            </strong>
          </p>
        </div>
        <div className="flex flex-1 justify-end"></div>
      </div>
    </Link>
  );
}

export default function Banner() {
  const { spotlight } = useNotify();

  if (spotlight) {
    const dateDifferenceinMs: number =
      new Date(spotlight.end).getTime() - new Date().getTime();

    if (dateDifferenceinMs > 0) {
      return (
        <Motion.div
          initial={{ y: -100, height: 0 }}
          animate={{ y: 0, height: "auto" }}
        >
          <PlainBanner spotlight={spotlight} />
        </Motion.div>
      );
    } else if (dateDifferenceinMs >= -1000) {
      return (
        <Motion.div
          initial={{ y: 0, height: "auto" }}
          animate={{ y: -100, height: 0 }}
        >
          <PlainBanner spotlight={spotlight} />
        </Motion.div>
      );
    }
  }

  return null;
}
