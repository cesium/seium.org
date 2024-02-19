import { useRef, useState, useEffect, MutableRefObject } from "react";
import jsQR from "jsqr";
import { FEEDBACK, FeedbackType } from "@components/QRScanner";

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" },
};

interface Props {
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
}) => {
  const [successReadingCode, setSuccessReadingCode] = useState(false);
  const [camMessage, setCamMessage] = useState<string>("");

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!successReadingCode) {
      const timeoutId = setTimeout(() => {
        setScanFeedback(FEEDBACK.SCANNING);
        isScanPaused.current = false;
      }, unpauseTimeout)

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [successReadingCode])

  useEffect(() => {
    const video = videoRef.current;

    if (!video?.srcObject) {
      setCamMessage("Grant camera permissions to be able to scan QR codes.");
      navigator.mediaDevices
        .getUserMedia(CAPTURE_OPTIONS)
        .then((stream) => {
          if (!video?.srcObject) {
            setCamMessage("");
            video.srcObject = stream;
            video.setAttribute("playsinline", "true"); // required to tell iOS safari we don't want fullscreen
            video.play();
            animationFrameRef.current =
              requestAnimationFrame(drawQRBoundingBox);
          }
        })
        .catch((err) => {
          if (!video?.srcObject && err instanceof DOMException) {
            setCamMessage(
              "We couldn't access your camera. Check if your camera is being used by another app and if you gave us permission to use it."
            );
          }
        });
    }

    return () => {
      if (video && video.srcObject) {
        (video.srcObject as MediaStream).getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  const drawQRBoundingBox = () => {
    const video = videoRef?.current;
    const canvas = canvasRef?.current;

    if (!video || !canvas) {
      cancelAnimationFrame(animationFrameRef.current);
      return null;
    }

    const canvas2D = canvas.getContext("2d");
    let successReadingCode = false;

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;

      // Will use the canvas to get the video image data, and pass it to jsQR, but will then clear the canvas to just draw the bounding box
      canvas2D.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas2D.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "dontInvert",
      });
      canvas2D.clearRect(0, 0, canvas.width, canvas.height);

      if (code) {
        successReadingCode = true;

        const {
          topLeftCorner,
          topRightCorner,
          bottomLeftCorner,
          bottomRightCorner,
        } = code.location;

        canvas2D.beginPath();

        canvas2D.moveTo(topLeftCorner.x, topLeftCorner.y);
        canvas2D.lineTo(topRightCorner.x, topRightCorner.y);
        canvas2D.lineTo(bottomRightCorner.x, bottomRightCorner.y);
        canvas2D.lineTo(bottomLeftCorner.x, bottomLeftCorner.y);
        canvas2D.lineTo(topLeftCorner.x, topLeftCorner.y);

        canvas2D.lineWidth = 4;
        canvas2D.strokeStyle = "#78f400";
        canvas2D.stroke();

        if (!isScanPaused.current) {
          const uuid = parseURL(code.data);

          if (uuid) {
            handleQRCode(uuid);
            isScanPaused.current = true;
          }
        }
      }
    }

    setSuccessReadingCode(successReadingCode)

    animationFrameRef.current = requestAnimationFrame(drawQRBoundingBox);
  };

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

  return (
    <div className="relative flex aspect-square w-full items-center justify-center rounded-2xl overflow-hidden bg-primary">
      <div className="absolute bg-white opacity-5 w-full h-full"/>

      <video
        ref={videoRef}
        className="absolute h-full w-full object-cover"
      />
      <canvas
        ref={canvasRef}
        className="absolute h-full w-full rounded-2xl object-cover"
      />

      <div>
        <p className="text-center p-16 text-white">{camMessage}</p>
      </div>
    </div>
  );
};

export default BarebonesQRScanner;
