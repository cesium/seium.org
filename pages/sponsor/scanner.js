import { useState, useRef } from "react";

import { withAuth } from "/components/Auth";

import { giveBadge } from "/lib/api";

import Base from "/components/moonstone/staff/utils/Base";
import QRScanner from "/components/moonstone/utils/QRScanner";
import { useAuth } from "../../components/Auth/useAuth";

const navigation = ["badges"];

function SponsorBadges() {
  const { user } = useAuth();
  const pauseRef = useRef(false);
  const successRef = useRef(null);
  const [feedbackText, setFeedbackText] = useState("Scanning");
  const [showScanner, setScanner] = useState(true);

  const resetScannerState = () => {
    new Promise((r) => setTimeout(r, 500)).then(() => {
      pauseRef.current = false;
      successRef.current = null;
      setFeedbackText("Scanning");
    });
  };

  const handleUUID = (uuid) => {
    console.log(uuid);
    giveBadge(uuid, "69420")
      .then((response) => {
        if (response.redeem) {
          successRef.current = true;
          navigator.vibrate([20, 10, 20]);
          setFeedbackText("Success");
          resetScannerState();
        } else if (response.errors?.unique_attendee_badge) {
          successRef.current = false;
          setFeedbackText("User has badge");
          resetScannerState();
        } else {
          successRef.current = false;
          setFeedbackText("Failure");
          resetScannerState();
        }
      })
      .catch((_) => {
        successRef.current = false;
        setFeedbackText("Failure");
        resetScannerState();
      });
  };

  return (
    <Base
      href="badges"
      title="Badges"
      description="Award your company's badge"
      navigation={navigation}
    >
      <div className="mt-5">
        <QRScanner
          handleCode={handleUUID}
          pauseRef={pauseRef}
          text={user.name}
          successRef={successRef}
          feedbackText={feedbackText}
          showScanner={showScanner}
          setScanner={setScanner}
          removeClose={true}
        />
      </div>
    </Base>
  );
}

export default withAuth(SponsorBadges);
