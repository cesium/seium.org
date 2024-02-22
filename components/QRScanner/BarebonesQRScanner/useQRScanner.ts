import { MutableRefObject, useEffect } from "react";
import jsQR from "jsqr";

interface useQRScannerProps {
  isCamReady: boolean;
  videoRef: MutableRefObject<HTMLVideoElement>;
  canvasRef: MutableRefObject<HTMLCanvasElement>;
  animationFrameRef: MutableRefObject<number>;
  isScanPaused: MutableRefObject<boolean>;
  parseURL: (url: string) => string | null;
  handleQRCode: (uuid: string) => void;
  setSuccessReadingCode: React.Dispatch<React.SetStateAction<boolean>>;
}

const useQRScanner = ({
  isCamReady,
  videoRef,
  canvasRef,
  animationFrameRef,
  isScanPaused,
  parseURL,
  handleQRCode,
  setSuccessReadingCode,
}: useQRScannerProps) => {
  useEffect(() => {
    drawQRBoundingBox();
  }, [isCamReady]);

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

    setSuccessReadingCode(successReadingCode);

    animationFrameRef.current = requestAnimationFrame(drawQRBoundingBox);
  };
};

export default useQRScanner;
