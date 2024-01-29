import { useState, useRef, useEffect } from "react";

import { getAttendeeByID } from "@lib/api";

import { withAuth } from "@context/Auth";

import Layout from "@components/Layout";
import QRScanner, { FEEDBACK } from "@components/QRScanner";

function Identifier() {
  const pauseScanRef = useRef(false);
  const [text, setText] = useState("None");
  const [scanFeedback, setScanFeedback] = useState(FEEDBACK.SCANNING);
  const [showQRScanner, setShowQRScanner] = useState(true);

  const resetScannerState = () => {
    new Promise((r) => setTimeout(r, 500)).then(() => {
      pauseScanRef.current = false;
      setScanFeedback(FEEDBACK.SCANNING);
    });
  };

  useEffect(() => {
    if (scanFeedback != FEEDBACK.SCANNING) {
      const id = setTimeout(() => {
        pauseScanRef.current = false;
        setScanFeedback(FEEDBACK.SCANNING);
      }, 700);

      return () => {
        clearTimeout(id);
      };
    }

    return () => {};
  }, [scanFeedback]);

  const handleUUID = (uuid: string) => {
    getAttendeeByID(uuid)
      .then((response) => {
        setText(`${response.data.name} | ${response.data.email}`);
        setScanFeedback(FEEDBACK.SUCCESS);
      })
      .catch((_) => {
        setScanFeedback(FEEDBACK.FAILURE);
        setText("None");
        resetScannerState();
      });
  };

  return (
    <Layout title="Identifier" description="Identify an attendee">
      <div className="mt-5 select-none">
        <QRScanner
          topText={text}
          handleQRCode={handleUUID}
          pauseScanRef={pauseScanRef}
          scanFeedback={scanFeedback}
          setScanFeedback={setScanFeedback}
          showScanner={showQRScanner}
          setShowScanner={setShowQRScanner}
          removeCloseButton={true}
        />
      </div>
    </Layout>
  );
}

export default withAuth(Identifier);
