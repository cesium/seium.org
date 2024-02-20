import { useEffect } from "react";

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" },
};

interface useWebcamPermissionsRequestProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  setCamMessage: React.Dispatch<React.SetStateAction<string>>;
  onPermissionGranted: () => void;
}

const useWebcamPermissions = ({
  videoRef,
  setCamMessage,
  onPermissionGranted,
}: useWebcamPermissionsRequestProps) => {
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
            onPermissionGranted();
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
};

export default useWebcamPermissions;
