import {
  useRef,
  useState,
  useEffect,
  MutableRefObject,
  ReactNode,
} from "react";
import { FEEDBACK, FeedbackType } from "@components/QRScanner";
import useWebcamPermissions from "./useWebcam";
import useQRScanner from "./useQRScanner";

interface Props extends React.HTMLProps<HTMLDivElement> {
  handleQRCode: (uuid: string) => void;
  isScanPaused: MutableRefObject<boolean>;
  unpauseTimeout?: number;
  setScanFeedback?: (feedback: FeedbackType) => void;
}

const BarebonesQRScanner: React.FC<Props> = ({
  handleQRCode,
  isScanPaused,
  unpauseTimeout = 700,
  setScanFeedback = (_) => {},
  ...rest
}) => {
  const [successReadingCode, setSuccessReadingCode] = useState(false);
  const [camMessage, setCamMessage] = useState<ReactNode>("");
  const [isCamReady, setIsCamReady] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  const parseURL = (url: string) => {
    try {
      const url_obj = new URL(url);

      if (url_obj.host !== process.env.NEXT_PUBLIC_QRCODE_HOST) {
        setScanFeedback(FEEDBACK.INVALID_QR);
        return null;
      }

      return url_obj.pathname.split("/").at(-1);
    } catch {
      return null;
    }
  };

  useEffect(() => {
    if (!successReadingCode) {
      const timeoutId = setTimeout(() => {
        setScanFeedback(FEEDBACK.SCANNING);
        isScanPaused.current = false;
      }, unpauseTimeout);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [successReadingCode]);

  useWebcamPermissions({
    videoRef,
    onPermissionGranted: () => {
      setIsCamReady(true);
    },
    setCamMessage,
  });

  useQRScanner({
    isCamReady,
    videoRef,
    canvasRef,
    animationFrameRef,
    isScanPaused,
    parseURL,
    handleQRCode,
    setSuccessReadingCode,
  });

  return (
    <div
      {...rest}
      className={
        "relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-primary " +
        rest.className
      }
    >
      <div className="absolute h-full w-full bg-white opacity-5" />

      <video ref={videoRef} className="absolute h-full w-full object-cover" />
      <canvas
        ref={canvasRef}
        className="absolute h-full w-full rounded-2xl object-cover"
      />

      <div className="absolute flex h-full w-full items-center justify-center">
        <div className="p-16 text-center text-white">{camMessage}</div>
      </div>
    </div>
  );
};

export default BarebonesQRScanner;
