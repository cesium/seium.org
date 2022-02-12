import { useRef } from "react";
import BarebonesQRScanner from "/components/moonstone/utils/QRScanner/BarebonesQRScanner";

import Button from "/components/moonstone/utils/Button";

function QRScanner({
  handleCode,
  pauseRef,
  text,
  successRef,
  feedbackText,
  showScanner,
  setScanner,
}) {
  function feedbackColor(success) {
    switch (success) {
      case true:
        return "bg-success";
      case false:
        return "bg-failure";
      default:
        return "bg-gray-500";
    }
  }

  if (showScanner) {
    return (
      <>
        <div className="grid-cols-1, grid gap-6">
          <div className="m-auto block flex h-16 w-full items-center justify-center rounded-2xl bg-warning">
            <p className="font-ibold font-bold">{text}</p>
          </div>
          <BarebonesQRScanner handleCode={handleCode} pauseRef={pauseRef} />
          <div className="w-auto text-white">
            <div
              className={`${feedbackColor(
                successRef.current
              )} m-auto block flex h-16 w-full items-center justify-center rounded-2xl`}
            >
              <p className="font-ibold font-bold">{feedbackText}</p>
            </div>
          </div>
          <Button
            onClick={() => {
              setScanner(false);
            }}
          >
            Close
          </Button>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default QRScanner;
