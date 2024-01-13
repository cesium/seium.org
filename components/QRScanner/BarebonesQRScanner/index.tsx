import { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";
import { Point } from "jsqr/dist/locator";

interface Props {
  handleCode: (uuid: string) => void;
  pauseRef: React.MutableRefObject<boolean>;
}

const BarebonesQRScanner: React.FC<Props> = ({ handleCode, pauseRef }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const [error, setError] = useState("");

  useEffect(() => {
    const video = videoRef.current;

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        //to prevent AbortError on Firefox in strict mode
        if (!video.srcObject) {
          setError("");
          video.srcObject = stream;
          video.setAttribute("playsinline", "true"); // required to tell iOS safari we don't want fullscreen
          video.play();
          animationFrameRef.current = requestAnimationFrame(tick);
        }
      })
      .catch((e) => {
        if (!video.srcObject) {
          setError(
            "We couldn't access your camera. Check if your camera is being used by another app and if you gave us permission to use it."
          );
          video.srcObject = undefined;
        }
      });

    return () => {
      if (video.srcObject) {
        (video.srcObject as MediaStream)
          .getTracks()
          .forEach((track) => track.stop());
        video.srcObject = undefined;
      }
    };
  }, []);

  const tick = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!canvas) {
      cancelAnimationFrame(animationFrameRef.current);
      return null;
    }

    const canvas2D = canvas.getContext("2d");

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvas.hidden = false;

      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      canvas2D.drawImage(video, 0, 0, canvas.width, canvas.height);
      var imageData = canvas2D.getImageData(0, 0, canvas.width, canvas.height);
      var code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "dontInvert",
      });

      if (code) {
        drawLine(
          canvas2D,
          code.location.topLeftCorner,
          code.location.topRightCorner,
          "#78f400"
        );
        drawLine(
          canvas2D,
          code.location.topRightCorner,
          code.location.bottomRightCorner,
          "#78f400"
        );
        drawLine(
          canvas2D,
          code.location.bottomRightCorner,
          code.location.bottomLeftCorner,
          "#78f400"
        );
        drawLine(
          canvas2D,
          code.location.bottomLeftCorner,
          code.location.topLeftCorner,
          "#78f400"
        );

        if (!pauseRef.current) {
          const uuid = parseURL(code.data);

          if (uuid) {
            pauseRef.current = true;
            handleCode(uuid);
          }
        }
      }
    }
    animationFrameRef.current = requestAnimationFrame(tick);
  };

  return (
    <>
      <video ref={videoRef} className="hidden" />

      <div
        ref={wrapperRef}
        className="relative flex aspect-square w-full max-w-full justify-center overflow-hidden rounded-2xl border-4 border-solid border-primary bg-primary align-middle"
      >
        <canvas ref={canvasRef} className="rounded-2xl" />
        <p className="absolute m-3 text-white">{error}</p>
      </div>
    </>
  );
};

export default BarebonesQRScanner;

const drawLine = (
  canvas: CanvasRenderingContext2D,
  begin: Point,
  end: Point,
  color: string
) => {
  canvas.beginPath();
  canvas.moveTo(begin.x, begin.y);
  canvas.lineTo(end.x, end.y);
  canvas.lineWidth = 4;
  canvas.strokeStyle = color;
  canvas.stroke();
};

const parseURL = (url: string) => {
  try {
    const url_obj = new URL(url);
    if (url_obj.host !== process.env.NEXT_PUBLIC_QRCODE_HOST) return null;
    return url_obj.pathname.split("/").at(-1);
  } catch {
    return null;
  }
};
