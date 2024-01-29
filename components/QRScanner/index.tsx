import { useEffect } from "react";
import BarebonesQRScanner from "./BarebonesQRScanner";
import Button from "@components/Button";

export interface FeedbackType {
  message: string;
  color: string;
}

export const FEEDBACK = {
  SCANNING: {
    message: "Scanning...",
    color: "bg-gray-500",
  },
  SUCCESS: {
    message: "Success",
    color: "bg-success",
  },
  ALREADY_HAS_BADGE: {
    message: "User already has badge",
    color: "bg-warning",
  },
  FAILURE: {
    message: "Failure",
    color: "bg-failure",
  },
  INVALID_QR: {
    message: "Invalid QR",
    color: "bg-failure",
  },
  OUT_OF_PERIOD: {
    message: "Out of badge-gifting period",
    color: "bg-failure",
  },
};

interface Props {
  topText: string;
  handleQRCode: (uuid: string) => void;
  pauseScanRef: React.MutableRefObject<boolean>;
  scanFeedback: FeedbackType;
  setScanFeedback: (scanFeedback: FeedbackType) => void;
  showScanner?: boolean;
  setShowScanner?: (show: boolean) => void;
  removeCloseButton?: boolean;
}

const QRScanner: React.FC<Props> = ({
  topText,
  handleQRCode,
  pauseScanRef,
  scanFeedback,
  setScanFeedback,
  showScanner = true,
  setShowScanner = (_) => {},
  removeCloseButton = false,
}) => {

  // Clear Failure message after 0.7 seconds
  useEffect(() => {
    if (scanFeedback != FEEDBACK.SCANNING) {
      const timeoutId = setTimeout(() => {
        pauseScanRef.current = false;
        setScanFeedback(FEEDBACK.SCANNING);
      }, 700);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [scanFeedback]);

  if (!showScanner) {
    return <></>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 max-w-lg m-auto">
      <div className="m-auto flex h-16 w-full items-center justify-center rounded-2xl bg-quinary text-black">
        <p className="font-ibold">{topText}</p>
      </div>
      <BarebonesQRScanner handleQRCode={handleQRCode} pauseScanRef={pauseScanRef} setScanFeedback={setScanFeedback}/>
      <div className="w-auto">
        <div
          className={`${scanFeedback.color} m-auto flex h-16 w-full items-center justify-center rounded-2xl`}
        >
          <p className="font-ibold font-bold">{scanFeedback.message}</p>
        </div>
      </div>
      {removeCloseButton !== true && (
        <Button title="Close" onClick={() => setShowScanner(false)} />
      )}
    </div>
  );
};

export default QRScanner;
