import { useState, useRef } from "react";
import { useRouter } from "next/router";

import { withAuth, useAuth } from "@context/Auth";

import Layout from "@components/Layout";
import QRScanner, { FEEDBACK } from "@components/QRScanner";

function Prizes() {
  const { user } = useAuth();
  const router = useRouter();
  const pauseRef = useRef(false);
  const [feedback, setFeedback] = useState(FEEDBACK.SCANNING);
  const [showScanner, setScanner] = useState(true);

  const handleUUID = (uuid) => {
    router.push(`/staff/prizes/${uuid}`);
  };

  return (
    <Layout title="Prizes" description="Mark a prize as redeemed">
      <div className="mt-5 select-none">
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
    </Layout>
  );
}

export default withAuth(Prizes);
