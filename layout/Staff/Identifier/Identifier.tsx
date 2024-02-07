import { useState, useRef, useEffect } from "react";

import { getAttendeeByID } from "@lib/api";

import { withAuth } from "@context/Auth";

import Layout from "@components/Layout";
import QRScanner, { FEEDBACK } from "@components/QRScanner";

const defaultTopText = "No QR Code Found!";

function Identifier() {
  const pauseScanRef = useRef(false);
  const [topText, setTopText] = useState(defaultTopText);
  const [scanFeedback, setScanFeedback] = useState(FEEDBACK.SCANNING);
  const [showQRScanner, setShowQRScanner] = useState(true);

  useEffect(() => {
    if (!pauseScanRef.current) {
      setTopText(defaultTopText);
    }
  }, [pauseScanRef]);


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

  return (
    <Layout title="Identifier" description="Identify an attendee">
      <div className="mt-5 select-none">
        <QRScanner
          topText={topText}
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