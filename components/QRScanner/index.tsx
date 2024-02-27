import { MutableRefObject, useEffect, useState } from "react";
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
  isScanPaused: MutableRefObject<boolean>;
  scanFeedback: FeedbackType;
  setScanFeedback: (feedback: FeedbackType) => void;
  showScanner?: boolean;
  setShowScanner?: (show: boolean) => void;
  removeCloseButton?: boolean;
}

const QRScanner: React.FC<Props> = ({
  topText,
  handleQRCode,
  isScanPaused,
  scanFeedback,
  setScanFeedback,
  showScanner = true,
  setShowScanner = (_) => {},
  removeCloseButton = false,
}) => {
  if (!showScanner) {
    return <></>;
  }

  return (
    <div className="m-auto w-full max-w-lg">
      <div className="flex h-16 w-full items-center justify-center rounded-2xl bg-quinary text-black">
        <p className="font-ibold">{topText}</p>
      </div>

      <BarebonesQRScanner
        className="my-6"
        handleQRCode={handleQRCode}
        isScanPaused={isScanPaused}
        setScanFeedback={setScanFeedback}
      />

      <div className="w-full">
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
