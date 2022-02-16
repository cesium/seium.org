import { useState, useRef, useEffect } from "react";

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

  useEffect(() => {
    if (feedback != FEEDBACK.SCANNING) {
      setTimeout(() => {
        pauseRef.current = false;
        setFeedback(FEEDBACK.SCANNING);
      }, 700);
    }
  }, [feedback]);

  const handleUUID = (uuid) => {
    let feedback;
    giveBadge(uuid, "69420")
      .then((response) => {
        if (response.redeem) {
          navigator.vibrate([40, 20, 40]);
          feedback = FEEDBACK.SUCCESS;
        } else {
          feedback = FEEDBACK.FAILURE;
        }
      })
      .catch((errors) => {
        if (errors.response.data.errors?.unique_attendee_badge) {
          feedback = FEEDBACK.ALREADY_HAS;
        } else {
          feedback = FEEDBACK.FAILURE;
        }
      })
      .finally(() => {
        setFeedback(feedback);
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
          showScanner={true}
          setScanner={true}
          removeClose={true}
        />
      </div>
    </Base>
  );
}

export default withAuth(SponsorBadges);
