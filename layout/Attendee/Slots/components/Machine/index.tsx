import { forwardRef, useRef, useImperativeHandle, useState } from "react";
import slots from "@data/slots.json";

// Max-speed in ms for animating one icon down
const rotationSpeed = 100;

// Time to wait before sending the response after the reels stop
const extraTime = 1000;

// Number of icons in each reel
const numIcons = slots.symbols;

// Size of the icons
var iconSize = 79;

interface MachineRef {
  rollAll: (multiplier: any) => Promise<void>;
}

// Check if an array contains an element
const contains = (arr, elem) => {
  return arr.some((e) => JSON.stringify(e) === JSON.stringify(elem));
};

const isTargetInMultipliers = (target) => {
  for (const multiplier in slots.multipliers) {
    if (contains(slots.multipliers[multiplier], target)) {
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
      Math.floor(Math.random() * numIcons)
    );
  } while (isTargetInMultipliers(target));
  return target;
};

const Machine = forwardRef<MachineRef>((_, ref) => {
  const machineRef = useRef(null);
  const [indexes, setIndexes] = useState([1, 1, 1]);

  const rollAll = (multiplier) => {
    return new Promise<void>((resolve) => {
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
    const rotationsDelta = rotations * numIcons;
    // Delta for the target
    const delta =
      rotationsDelta +
      (rotationsDelta + (indexes[reelIndex] % numIcons)) -
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
        targetBackgroundPositionY = backgroundPositionY + delta * iconSize,
        // Normalized background position, for reset
        normTargetBackgroundPositionY =
          targetBackgroundPositionY % (numIcons * iconSize);

      // Delay animation with timeout
      setTimeout(() => {
        reel.style.transition = `background-position-y ${
          (8 + 1 * delta) * rotationSpeed
        }ms cubic-bezier(.41,-0.01,.63,1.09)`;
        // Set background position
        reel.style.backgroundPositionY = `${
          backgroundPositionY + delta * iconSize
        }px`;
      }, reelIndex * 150);

      // After animation
      setTimeout(() => {
        // Reset position, so that it doesn't get higher without limit
        reel.style.transition = `none`;
        reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;
        // Resolve this promise
        resolve(delta % numIcons);
      }, (8 + 1 * delta) * rotationSpeed + reelIndex * 150 + extraTime);
    });
  };

  useImperativeHandle(ref, () => ({
    rollAll: (multiplier) => rollAll(multiplier),
  }));

  return (
    <div ref={machineRef}>
      <div className="flex justify-center">
        <div className="slots flex gap-5 rounded-3xl py-6 px-12 ring-2 ring-white">
          <div
            className="reel rounded-3xl bg-cover bg-repeat-y ring-2 ring-white"
            style={{
              height: 237,
              width: 79,
              backgroundImage: 'url("/images/slots/reel_0.svg")',
            }}
          />
          <div
            className="reel rounded-3xl bg-cover bg-repeat-y ring-2 ring-white"
            style={{
              height: 237,
              width: 79,
              backgroundImage: 'url("/images/slots/reel_1.svg")',
            }}
          />
          <div
            className="reel rounded-3xl bg-cover bg-repeat-y ring-2 ring-white"
            style={{
              height: 237,
              width: 79,
              backgroundImage: 'url("/images/slots/reel_2.svg")',
            }}
          />
        </div>
      </div>
    </div>
  );
});

export default Machine;
