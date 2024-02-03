import { forwardRef, useRef, useImperativeHandle, useState } from "react";
import slots from "@data/slots.json";

// TODO: Refactor

// Width of the icons
var icon_width = 79,
  // Height of one icon in the strip
  icon_height = 79,
  // Number of icons in the strip
  num_icons = 9,
  // Max-speed in ms for animating one icon down
  time_per_icon = 100;

interface MachineProps {}

interface MachineRef {
  rollAll: (multiplier: any) => Promise<void>;
}

const isTargetInMultipliers = (target) => {
  for (const multiplier in slots.multipliers) {
    if (slots.multipliers[multiplier].includes(target)) {
      return true;
    }
  }
  return false;
};

// Get a random target that corresponds to the multiplier
const getReelsTarget = (multiplier) => {
  if (multiplier != 0) {
    const combinations = slots.multipliers[multiplier];
    return combinations[Math.floor(Math.random() * combinations.length)];
  }

  // Finds a random target that is not in the multipliers
  let target;
  do {
    target = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * num_icons)
    );
  } while (isTargetInMultipliers(target));
  return target;
};

const Machine = forwardRef<MachineRef, MachineProps>((props, ref) => {
  const machineRef = useRef(null);
  const [indexes, setIndexes] = useState([1, 1, 1]);

  const rollAll = (multiplier) => {
    return new Promise<void>((resolve) => {
      console.log("HAS RECEIVED: " + multiplier);
      const reelsList = document.querySelectorAll(".slots > .reel");
      const reelsTarget = getReelsTarget(multiplier);
      const promises = [];

      for (let i = 0; i < reelsList.length; i++) {
        promises.push(roll(reelsList[i], i, reelsTarget[i]));
      }

      Promise.all(promises).then(() => {
        resolve();
      });
    });
  };

  const roll = (reel, reelIndex, target) => {
    // Number of reel rotations
    const rotations = reelIndex + 2;
    // Calculate the delta for the reels rotation
    const rotationsDelta = rotations * num_icons;
    // Delta for the target
    const delta =
      rotationsDelta +
      (rotationsDelta + (indexes[reelIndex] % num_icons)) -
      target;

    // Sets the new index
    setIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[reelIndex] = target;
      return newIndexes;
    });

    // Return promise so we can wait for all reels to finish
    return new Promise((resolve, reject) => {
      const style = getComputedStyle(reel),
        // Current background position
        backgroundPositionY = parseFloat(style["background-position-y"]),
        // Target background position
        targetBackgroundPositionY = backgroundPositionY + delta * icon_height,
        // Normalized background position, for reset
        normTargetBackgroundPositionY =
          targetBackgroundPositionY % (num_icons * icon_height);

      // Delay animation with timeout, for some reason a delay in the animation property causes stutter
      setTimeout(() => {
        // Set transition properties ==> https://cubic-bezier.com/#.41,-0.01,.63,1.09
        reel.style.transition = `background-position-y ${
          (8 + 1 * delta) * time_per_icon
        }ms cubic-bezier(.41,-0.01,.63,1.09)`;
        // Set background position
        reel.style.backgroundPositionY = `${
          backgroundPositionY + delta * icon_height
        }px`;
      }, reelIndex * 150);

      // After animation
      setTimeout(() => {
        // Reset position, so that it doesn't get higher without limit
        reel.style.transition = `none`;
        reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;
        // Resolve this promise
        resolve(delta % num_icons);
      }, (8 + 1 * delta) * time_per_icon + reelIndex * 150);
    });
  };

  useImperativeHandle(ref, () => ({
    rollAll: (multiplier) => rollAll(multiplier),
  }));

  return (
    <div ref={machineRef}>
      <div className="slots flex justify-center gap-4">
        <div
          className="reel bg-cover bg-repeat-y"
          style={{
            height: 237,
            width: 79,
            backgroundImage: 'url("/images/slots/reel_0.svg")',
          }}
        />
        <div
          className="reel bg-cover bg-repeat-y"
          style={{
            height: 237,
            width: 79,
            backgroundImage: 'url("/images/slots/reel_1.svg")',
          }}
        />
        <div
          className="reel bg-cover bg-repeat-y"
          style={{
            height: 237,
            width: 79,
            backgroundImage: 'url("/images/slots/reel_2.svg")',
          }}
        />
      </div>
      {/*
            <svg className="max-h-[30rem]" viewBox="0 0 828 513" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M197.028 45H70.4238C49.7552 45 33 63.1997 33 85.6501V470.376C33 492.826 49.7552 511.026 70.4238 511.026H197.028C217.697 511.026 234.452 492.826 234.452 470.376V85.6501C234.452 63.1997 217.697 45 197.028 45Z" fill="url(#paint0_linear_45_3)"/>
                <path d="M197.028 45H70.4238C49.7552 45 33 63.1997 33 85.6501V470.376C33 492.826 49.7552 511.026 70.4238 511.026H197.028C217.697 511.026 234.452 492.826 234.452 470.376V85.6501C234.452 63.1997 217.697 45 197.028 45Z" fill="url(#paint1_linear_45_3)"/>
                <path d="M197.028 45H70.4238C49.7552 45 33 63.1997 33 85.6501V470.376C33 492.826 49.7552 511.026 70.4238 511.026H197.028C217.697 511.026 234.452 492.826 234.452 470.376V85.6501C234.452 63.1997 217.697 45 197.028 45Z" stroke="white" stroke-width="3" stroke-miterlimit="10"/>
                <path d="M440.694 45H314.09C293.421 45 276.666 63.1997 276.666 85.6501V470.376C276.666 492.826 293.421 511.026 314.09 511.026H440.694C461.363 511.026 478.118 492.826 478.118 470.376V85.6501C478.118 63.1997 461.363 45 440.694 45Z" fill="url(#paint2_linear_45_3)"/>
                <path d="M440.694 45H314.09C293.421 45 276.666 63.1997 276.666 85.6501V470.376C276.666 492.826 293.421 511.026 314.09 511.026H440.694C461.363 511.026 478.118 492.826 478.118 470.376V85.6501C478.118 63.1997 461.363 45 440.694 45Z" fill="url(#paint3_linear_45_3)"/>
                <path d="M440.694 45H314.09C293.421 45 276.666 63.1997 276.666 85.6501V470.376C276.666 492.826 293.421 511.026 314.09 511.026H440.694C461.363 511.026 478.118 492.826 478.118 470.376V85.6501C478.118 63.1997 461.363 45 440.694 45Z" stroke="white" stroke-width="3" stroke-miterlimit="10"/>
                <path d="M684.423 45H557.818C537.15 45 520.395 63.1997 520.395 85.6501V470.376C520.395 492.826 537.15 511.026 557.818 511.026H684.423C705.091 511.026 721.847 492.826 721.847 470.376V85.6501C721.847 63.1997 705.091 45 684.423 45Z" fill="url(#paint4_linear_45_3)"/>
                <path d="M684.423 45H557.818C537.15 45 520.395 63.1997 520.395 85.6501V470.376C520.395 492.826 537.15 511.026 557.818 511.026H684.423C705.091 511.026 721.847 492.826 721.847 470.376V85.6501C721.847 63.1997 705.091 45 684.423 45Z" fill="url(#paint5_linear_45_3)"/>
                <path d="M684.423 45H557.818C537.15 45 520.395 63.1997 520.395 85.6501V470.376C520.395 492.826 537.15 511.026 557.818 511.026H684.423C705.091 511.026 721.847 492.826 721.847 470.376V85.6501C721.847 63.1997 705.091 45 684.423 45Z" stroke="white" stroke-width="3" stroke-miterlimit="10"/>
                <path d="M66 288L16.5 259.421L16.5 316.579L66 288Z" fill="white"/>
                <g>
                    <path d="M694 287.674L745.174 258.129L745.174 317.22L694 287.674Z" fill="white"/>
                    <rect x="747.07" y="257.349" width="45.4884" height="60.6512" fill="white"/>
                    <path d="M794 121H810V314C810 316.209 808.209 318 806 318H794V121Z" fill="white"/>
                    <path d="M774 39.9406L774 175.059C774 197.118 776.109 215 778.71 215L823.29 215C825.891 215 828 197.118 828 175.059L828 39.9406C828 17.882 825.891 1.29906e-05 823.29 1.31043e-05L778.71 1.50529e-05C776.109 1.51666e-05 774 17.882 774 39.9406Z" fill="url(#paint7_linear_45_3)"/>
                </g>
                <defs>
                    <linearGradient id="paint0_linear_45_3" x1="133.72" y1="511.026" x2="133.72" y2="45" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C9620D"/>
                    <stop offset="0.12" stop-color="#CF640D"/>
                    <stop offset="0.29" stop-color="#E06B0F"/>
                    <stop offset="0.49" stop-color="#FD7611"/>
                    <stop offset="0.5" stop-color="#FF7712"/>
                    <stop offset="0.51" stop-color="#FD7611"/>
                    <stop offset="0.71" stop-color="#E06B0F"/>
                    <stop offset="0.88" stop-color="#CF640D"/>
                    <stop offset="1" stop-color="#C9620D"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_45_3" x1="133.726" y1="45" x2="133.726" y2="511.026" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF800D"/>
                    <stop offset="0.5" stop-color="#FFA95B"/>
                    <stop offset="1" stop-color="#FF800D"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_45_3" x1="276.666" y1="278.013" x2="478.118" y2="278.013" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C9620D"/>
                    <stop offset="0.12" stop-color="#CF640D"/>
                    <stop offset="0.29" stop-color="#E06B0F"/>
                    <stop offset="0.49" stop-color="#FD7611"/>
                    <stop offset="0.5" stop-color="#FF7712"/>
                    <stop offset="0.51" stop-color="#FD7611"/>
                    <stop offset="0.71" stop-color="#E06B0F"/>
                    <stop offset="0.88" stop-color="#CF640D"/>
                    <stop offset="1" stop-color="#C9620D"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_45_3" x1="377.392" y1="45" x2="377.392" y2="511.026" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF800D"/>
                    <stop offset="0.5" stop-color="#FFA95B"/>
                    <stop offset="1" stop-color="#FF800D"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_45_3" x1="621.114" y1="-286.515" x2="621.114" y2="45" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C9620D"/>
                    <stop offset="0.12" stop-color="#CF640D"/>
                    <stop offset="0.29" stop-color="#E06B0F"/>
                    <stop offset="0.49" stop-color="#FD7611"/>
                    <stop offset="0.5" stop-color="#FF7712"/>
                    <stop offset="0.51" stop-color="#FD7611"/>
                    <stop offset="0.71" stop-color="#E06B0F"/>
                    <stop offset="0.88" stop-color="#CF640D"/>
                    <stop offset="1" stop-color="#C9620D"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_45_3" x1="621.121" y1="45" x2="621.121" y2="511.026" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF800D"/>
                    <stop offset="0.5" stop-color="#FFA95B"/>
                    <stop offset="1" stop-color="#FF800D"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear_45_3" x1="735.586" y1="107.507" x2="774" y2="107.507" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C9620D"/>
                    <stop offset="0.12" stop-color="#CF640D"/>
                    <stop offset="0.29" stop-color="#E06B0F"/>
                    <stop offset="0.49" stop-color="#FD7611"/>
                    <stop offset="0.5" stop-color="#FF7712"/>
                    <stop offset="0.51" stop-color="#FD7611"/>
                    <stop offset="0.71" stop-color="#E06B0F"/>
                    <stop offset="0.88" stop-color="#CF640D"/>
                    <stop offset="1" stop-color="#C9620D"/>
                    </linearGradient>
                    <linearGradient id="paint7_linear_45_3" x1="774" y1="107.5" x2="828" y2="107.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF800D"/>
                    <stop offset="0.5" stop-color="#FFA95B"/>
                    <stop offset="1" stop-color="#FF800D"/>
                    </linearGradient>
                </defs>
        </svg>
        */}
    </div>
  );
});

export default Machine;
