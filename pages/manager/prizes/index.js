import { useState, useRef } from "react";

import { withAuth } from "/components/Auth";

import { giveBadge } from "/lib/api";

import Base from "/components/moonstone/staff/utils/Base";
import QRScanner from "/components/moonstone/utils/QRScanner";
import { useAuth } from "/components/Auth/useAuth";
import { useRouter } from "next/router";

const navigation = ["badges", "prizes", "identifier"];

function RedeemPrizes() {
  const { user } = useAuth();
  const router = useRouter();
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
    router.push(`/manager/prizes/${uuid}`);
  };

  return (
    <Base
      href="prizes"
      title="Prizes"
      description="Mark a prize as redeemed"
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

export default withAuth(RedeemPrizes);
