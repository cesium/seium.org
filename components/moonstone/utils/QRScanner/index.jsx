import BarebonesQRScanner from "/components/moonstone/utils/QRScanner/BarebonesQRScanner";

import Button from "/components/moonstone/utils/Button";

export const FEEDBACK = {
  SUCCESS: {
    message: "Success",
    color: "bg-success",
  },
  SCANNING: {
    message: "Scanning...",
    color: "bg-gray-500",
  },
  ALREADY_HAS: {
    message: "User already has badge",
    color: "bg-warning",
  },
  FAILURE: {
    message: "Failure",
    color: "bg-failure",
  },
  INVALID: {
    message: "Invalid QR",
    color: "bg-failure",
  },
};

function QRScanner({
  handleCode,
  pauseRef,
  text,
  feedback,
  showScanner,
  setScanner,
  removeClose,
}) {
  if (!showScanner) {
    return null;
  }

  return (
    <div className="grid-cols-1, grid gap-6">
      <div className="m-auto block flex h-16 w-full items-center justify-center rounded-2xl bg-warning">
        <p className="font-ibold font-bold">{text}</p>
      </div>
      <BarebonesQRScanner handleCode={handleCode} pauseRef={pauseRef} />
      <div className="w-auto text-white">
        <div
          className={`${feedback.color} m-auto block flex h-16 w-full items-center justify-center rounded-2xl`}
        >
          <p className="font-ibold font-bold">{feedback.message}</p>
        </div>
      </div>
      {removeClose !== true && (
        <Button
          onClick={() => {
            setScanner(false);
          }}
        >
          Close
        </Button>
      )}
    </div>
  );
}

export default QRScanner;
