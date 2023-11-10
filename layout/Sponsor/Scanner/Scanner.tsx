import { useState, useRef, useEffect } from "react";
import { giveBadge } from "@lib/api";
import { withAuth, useAuth } from "@context/Auth";

import QRScanner, { FEEDBACK } from "@components/QRScanner";
import Layout from "@components/Layout";

const SponsorBadges: React.FC = () => {
  const { user } = useAuth();
  const pauseRef = useRef(false);
  const [feedback, setFeedback] = useState<typeof FEEDBACK.SCANNING>(
    FEEDBACK.SCANNING,
  );

  useEffect(() => {
    if (feedback != FEEDBACK.SCANNING) {
      setTimeout(() => {
        pauseRef.current = false;
        setFeedback(FEEDBACK.SCANNING);
      }, 700);
    }
  }, [feedback]);

  const handleUUID = (uuid: string) => {
    let feedback_var: typeof FEEDBACK.SCANNING;
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
    <Layout
      title="Scanner"
      description="Recompensa os teus visitantes com o badge"
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
    </Layout>
  );
};

export default withAuth(SponsorBadges);
