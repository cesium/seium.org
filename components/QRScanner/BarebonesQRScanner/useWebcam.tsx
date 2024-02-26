import { useEffect, ReactNode } from "react";
import Button from "components/Button";

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" },
};

interface useWebcamPermissionsRequestProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  setCamMessage: React.Dispatch<React.SetStateAction<ReactNode>>;
  onPermissionGranted: () => void;
}

const checkWebcamPermissions = async () => {
  try {
    const result = await navigator.permissions?.query({ name: "camera" });
    return result.state === "granted";
  } catch (e) {
    // Firefox has not yet supported the permissions API for camera
    const devices = await navigator.mediaDevices.enumerateDevices();

    const permissions = devices
      .filter(({ kind }) => kind === "videoinput")
      .filter(({ label }) => label !== "");

    return permissions.length > 0;
  }
};

export const requestWebcam = ({
  videoRef,
  setCamMessage,
  onPermissionGranted,
}: useWebcamPermissionsRequestProps) => {
  const video = videoRef.current;

  if (!video?.srcObject) {
    navigator.mediaDevices
      .getUserMedia(CAPTURE_OPTIONS)
      .then((stream) => {
        if (!video?.srcObject) {
          video.srcObject = stream;
          video.setAttribute("playsinline", "true"); // required to tell iOS safari we don't want fullscreen
          video.play();

          setCamMessage("");
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
};

const useWebcam = ({
  videoRef,
  setCamMessage,
  onPermissionGranted,
}: useWebcamPermissionsRequestProps) => {
  useEffect(() => {
    checkWebcamPermissions()
      .then((arePermissionsGranted) => {
        if (!arePermissionsGranted) {
          setCamMessage(
            <Button
              title="Click me to open QRScanner!"
              onClick={() => {
                requestWebcam({ videoRef, setCamMessage, onPermissionGranted });
                setCamMessage(
                  "Grant camera permissions to be able to scan QR codes."
                );
              }}
            />
          );
        } else {
          requestWebcam({ videoRef, setCamMessage, onPermissionGranted });
        }
      })
      .catch(() => {
        requestWebcam({ videoRef, setCamMessage, onPermissionGranted });
      });

    const video = videoRef.current;

    return () => {
      if (video && video.srcObject) {
        (video.srcObject as MediaStream).getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);
};

export default useWebcam;
