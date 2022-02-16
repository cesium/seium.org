import { useState, useRef } from "react";

import { withAuth } from "/components/Auth";

import { giveBadge } from "/lib/api";

import Base from "/components/moonstone/staff/utils/Base";
import QRScanner, { FEEDBACK } from "/components/moonstone/utils/QRScanner";
import { useAuth } from "../../components/Auth/useAuth";

const navigation = ["badges"];

function SponsorBadges() {
  const { user } = useAuth();
  const pauseRef = useRef(false);
  const [feedback, setFeedback] = useState(FEEDBACK.SCANNING);
  const [showScanner, setScanner] = useState(true);

  const resetScannerState = () => {
    new Promise((r) => setTimeout(r, 500)).then(() => {
      pauseRef.current = false;
      setFeedback(FEEDBACK.SCANNING);
    });
  };

  const handleUUID = (uuid) => {
    giveBadge(uuid, "69420")
      .then((response) => {
        if (response.redeem) {
          navigator.vibrate([20, 10, 20]);
          setFeedback(FEEDBACK.SUCCESS);
        } else {
          setFeedback(FEEDBACK.FAILURE);
        }
        resetScannerState();
      })
      .catch((errors) => {
        if (errors.response.data.errors?.unique_attendee_badge) {
          setFeedback(FEEDBACK.ALREADY_HAS);
        } else {
          setFeedback(FEEDBACK.FAILURE);
        }
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
          feedback={feedback}
          showScanner={showScanner}
          setScanner={setScanner}
          removeClose={true}
        />
      </div>
    </Base>
  );
}

export default withAuth(SponsorBadges);
