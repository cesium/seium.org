import dynamic from "next/dynamic";
const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

import { getAttendee } from "/lib/api";

export default function QrScanner({ onScan, onExit }) {
  const handleScan = (data) => {
    const url = "https://seium.org/attendees/";
    if (data) {
      if (data.slice(0, url.length) != url) {
        alert("Qr code not valid");
        return;
      }

      const uuid = data.slice(url.length);
      onScan(uuid);
      onExit();
    }
  };

  return (
    <div className="fixed inset-0 h-screen w-screen bg-secondary">
      <h3 className="relative z-50 mt-5 bg-transparent text-center font-ibold text-lg text-white">
        Scan the participant&apos;s QR Code
      </h3>
      <button
        className="relative z-50 ml-5 mt-5 rounded-full bg-quinary p-4 text-center font-ibold text-3xl text-white"
        onClick={onExit}
      >
        Go back
      </button>
      <div className="absolute top-1/2 left-1/2 w-full -translate-y-1/2 -translate-x-1/2">
        <QrReader
          delay={30}
          onError={() => {
            alert("An error has occured when scanning.");
            onExit();
          }}
          style={{ width: "100%", height: "100%" }}
          onScan={handleScan}
        />
      </div>
    </div>
  );
}
