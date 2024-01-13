import BarebonesQRScanner from "./BarebonesQRScanner";
import Button from "@components/Button";

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

interface Props {
  handleCode: (uuid: string) => void;
  pauseRef: React.MutableRefObject<boolean>;
  text: string;
  feedback: {
    message: string;
    color: string;
  };
  showScanner: boolean;
  setScanner: (show: boolean) => void;
  removeClose?: boolean;
}

const QRScanner: React.FC<Props> = ({
  handleCode,
  pauseRef,
  text,
  feedback,
  showScanner,
  setScanner,
  removeClose,
}) => {
  if (!showScanner) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="m-auto flex h-16 w-full items-center justify-center rounded-2xl bg-quinary text-black">
        <p className="font-ibold">{text}</p>
      </div>
      <BarebonesQRScanner handleCode={handleCode} pauseRef={pauseRef} />
      <div className="w-auto">
        <div
          className={`${feedback.color} m-auto flex h-16 w-full items-center justify-center rounded-2xl`}
        >
          <p className="font-ibold font-bold">{feedback.message}</p>
        </div>
      </div>
      {removeClose !== true && (
        <Button
          title="Close"
          onClick={() => {
            setScanner(false);
          }}
        ></Button>
      )}
    </div>
  );
};

export default QRScanner;
