import { useState, useRef } from "react";
import { useRouter } from "next/router";

import { withAuth, useAuth } from "@context/Auth";

import Base from "@components/Base";
import QRScanner, { FEEDBACK } from "@components/QRScanner";

const navigation = ["badges", "prizes", "identifier"];

function ManagePrizes() {
  const { user } = useAuth();
  const router = useRouter();
  const pauseRef = useRef(false);
  const [feedback, setFeedback] = useState(FEEDBACK.SCANNING);
  const [showScanner, setScanner] = useState(true);

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
          feedback={feedback}
          showScanner={showScanner}
          setScanner={setScanner}
          removeClose={true}
        />
      </div>
    </Base>
  );
}

export default withAuth(ManagePrizes);
