import { useState, useRef } from "react";

import { withAuth } from "/components/Auth";

import { getAttendee } from "/lib/api";

import Base from "/components/moonstone/staff/utils/Base";
import QRScanner, { FEEDBACK } from "/components/moonstone/utils/QRScanner";

const navigation = ["badges", "prizes", "identifier"];

function ManagerIdentifier() {
  const pauseRef = useRef(false);
  const [text, setText] = useState("None");
  const [feedback, setFeedback] = useState(FEEDBACK.SCANNING);
  const [showScanner, setScanner] = useState(true);

  useEffect(() => {
    if (feedback != FEEDBACK.SCANNING) {
      setTimeout(() => {
        pauseRef.current = false;
        setFeedback(FEEDBACK.SCANNING);
      }, 700);
    }
  }, [feedback]);

  const handleUUID = (uuid) => {
    getAttendee(uuid)
      .then((response) => {
        setText(`${response.data.name} | ${response.data.email}`);
        navigator.vibrate([20, 10, 20]);
        setFeedback(FEEDBACK.SUCCESS);
      })
      .catch((_) => {
        setFeedback(FEEDBACK.FAILURE);
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
