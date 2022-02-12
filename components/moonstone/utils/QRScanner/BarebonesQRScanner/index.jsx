import { useEffect, useRef } from "react";
import jsQR from "jsqr";

function BarebonesQRScanner({ handleCode, pauseRef }) {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const animationFrameRef = useRef();
  var animationFrame = null;

  useEffect(() => {
    const video = videoRef.current;

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then(function (stream) {
        video.srcObject = stream;
        video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
        video.play();
        animationFrameRef.current = requestAnimationFrame(tick);
      });
  }, []);

  function drawLine(canvas, begin, end, color) {
    canvas.beginPath();
    canvas.moveTo(begin.x, begin.y);
    canvas.lineTo(end.x, end.y);
    canvas.lineWidth = 4;
    canvas.strokeStyle = color;
    canvas.stroke();
  }

  function parseURL(url) {
    return url.slice(32);
  }

  function tick() {
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
          pauseRef.current = true;
          handleCode(parseURL(code.data));
        }
      }
    }
    animationFrameRef.current = requestAnimationFrame(tick);
  }

  return (
    <>
      <video ref={videoRef} className="hidden" />

      <div
        ref={wrapperRef}
        className="flex aspect-square w-full max-w-full justify-center overflow-hidden rounded-2xl border-4 border-solid border-primary bg-primary align-middle"
      >
        <canvas ref={canvasRef} className="rounded-2xl" />
      </div>
    </>
  );
}

export default BarebonesQRScanner;
