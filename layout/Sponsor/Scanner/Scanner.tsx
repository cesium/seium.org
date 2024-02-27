import { useState, useRef, useEffect } from "react";
import { giveBadge } from "@lib/api";
import { withAuth, useAuth, ISponsor } from "@context/Auth";

import QRScanner, { FEEDBACK, FeedbackType } from "@components/QRScanner";
import Layout from "@components/Layout";

const SponsorBadges: React.FC = () => {
  const { user } = useAuth() as { user: ISponsor };
  const pauseScanRef = useRef(false);
  const [scanFeedback, setScanFeedback] = useState<FeedbackType>(
    FEEDBACK.SCANNING
  );

  const handleUUID = (uuid: string) => {
    let feedback_var = FEEDBACK.FAILURE;

    giveBadge(uuid, "69420")
      .then((response) => {
        if (response.redeem) {
          feedback_var = FEEDBACK.SUCCESS;
        } else {
          feedback_var = FEEDBACK.FAILURE;
        }
      })
      .catch((errors) => {
        const error = errors.response.data.errors;
        if (error?.unique_attendee_badge) {
          feedback_var = FEEDBACK.ALREADY_HAS_BADGE;
        } else if (error.end_badge) {
          feedback_var = FEEDBACK.OUT_OF_PERIOD;
        } else {
          feedback_var = FEEDBACK.FAILURE;
        }
      })
      .finally(() => setScanFeedback(feedback_var));
  };

  return (
    <Layout
      title="Scanner"
      description="Recompensa os teus visitantes com o badge"
    >
      <div className="mt-5 flex flex-grow select-none justify-center">
        <QRScanner
          handleQRCode={handleUUID}
          isScanPaused={pauseScanRef}
          topText={user.name}
          scanFeedback={scanFeedback}
          setScanFeedback={setScanFeedback}
          showScanner={true}
          removeCloseButton={true}
        />
      </div>
    </Layout>
  );
};

export default withAuth(SponsorBadges);
