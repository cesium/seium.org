import { useState, useRef, useEffect } from "react";

import { getAttendee } from "@lib/api";

import { withAuth } from "@context/Auth";

import Layout from "@components/Layout";
import QRScanner, { FEEDBACK } from "@components/QRScanner";

const navigation = ["badges", "prizes", "identifier"];

function Identifier() {
  const pauseRef = useRef(false);
  const [text, setText] = useState("None");
  const [feedback, setFeedback] = useState(FEEDBACK.SCANNING);
  const [showScanner, setScanner] = useState(true);

  const resetScannerState = () => {
    new Promise((r) => setTimeout(r, 500)).then(() => {
      pauseRef.current = false;
      setFeedback(FEEDBACK.SCANNING);
    });
  };

  useEffect(() => {
    if (feedback != FEEDBACK.SCANNING) {
      const id = setTimeout(() => {
        pauseRef.current = false;
        setFeedback(FEEDBACK.SCANNING);
      }, 700);

      return () => {
        clearTimeout(id);
      };
    }

    return () => {};
  }, [feedback]);

  const handleUUID = (uuid) => {
    getAttendee(uuid)
      .then((response) => {
        setText(`${response.data.name} | ${response.data.email}`);
        setFeedback(FEEDBACK.SUCCESS);
      })
      .catch((_) => {
        setFeedback(FEEDBACK.FAILURE);
        setText("None");
        resetScannerState();
      });
  };

  return (
    <Layout
      title="Identifier"
      description="Identify an attendee"
      navigation={navigation}
      basePath="manager"
    >
      <div className="mt-5">
        <QRScanner
          handleCode={handleUUID}
          pauseRef={pauseRef}
          text={text}
          feedback={feedback}
          showScanner={showScanner}
          setScanner={setScanner}
          removeClose={true}
        />
      </div>
    </Layout>
  );
}

export default withAuth(Identifier);
