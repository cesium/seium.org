import { useState, useRef, useEffect } from "react";

import { getAttendeeByID } from "@lib/api";

import { withAuth } from "@context/Auth";

import Layout from "@components/Layout";
import QRScanner, { FEEDBACK } from "@components/QRScanner";

const defaultTopText = "No QR Code Found!";

function Identifier() {
  const [topText, setTopText] = useState(defaultTopText);
  const [showQRScanner, setShowQRScanner] = useState(true);

  const isScanPaused = useRef(false);
  const [scanFeedback, setScanFeedback] = useState(FEEDBACK.SCANNING);

  const handleUUID = (uuid: string) => {
    getAttendeeByID(uuid)
      .then((response) => {
        setTopText(`${response.data.name} | ${response.data.email}`);
        setScanFeedback(FEEDBACK.SUCCESS);
      })
      .catch((_) => {
        setScanFeedback(FEEDBACK.FAILURE);
        setTopText(defaultTopText);
      });
  };

  useEffect(() => {
    if (scanFeedback == FEEDBACK.SCANNING) {
      const timeoutID = setTimeout(() => {
        setTopText(defaultTopText);
      }, 3000);

      return () => {
        clearTimeout(timeoutID);
      };
    }
  }, [scanFeedback]);

  return (
    <Layout title="Identifier" description="Identify an attendee">
      <div className="mt-5 flex flex-grow select-none justify-center">
        <QRScanner
          topText={topText}
          handleQRCode={handleUUID}
          isScanPaused={isScanPaused}
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
