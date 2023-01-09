import { useState, useRef, useEffect } from "react";

import { getAttendee } from "@lib/api";

import { withAuth } from "@context/Auth";

import Base from "@components/Base";
import QRScanner, { FEEDBACK } from "@components/QRScanner";

const navigation = ["badges", "prizes", "identifier"];

function ManagerIdentifier() {
  const pauseRef = useRef(false);
  const [text, setText] = useState("None");
  const [feedback, setFeedback] = useState(FEEDBACK.SCANNING);
  const [showScanner, setScanner] = useState(true);

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
    <Base
      href="identifier"
      title="Identifier"
      description="Identify an attendee"
      navigation={navigation}
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
    </Base>
  );
}

export default withAuth(ManagerIdentifier);
