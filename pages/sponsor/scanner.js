import { useState, useRef, useEffect } from "react";

import { withAuth } from "/components/Auth";

import { giveBadge } from "/packages/safirajs/lib/badges";

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
    let feedback_var;
    giveBadge(uuid, "69420")
      .then((response) => {
        if (response.redeem) {
          feedback_var = FEEDBACK.SUCCESS;
        } else {
          feedback_var = FEEDBACK.FAILURE;
        }
      })
      .catch((errors) => {
        if (errors.response.data.errors?.unique_attendee_badge) {
          feedback_var = FEEDBACK.ALREADY_HAS;
        } else {
          feedback_var = FEEDBACK.FAILURE;
        }
      })
      .finally(() => {
        setFeedback(feedback_var);
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
