import { useState, useRef } from "react";
import { useRouter } from "next/router";

import { withAuth, useAuth, IStaff } from "@context/Auth";

import Layout from "@components/Layout";
import QRScanner, { FEEDBACK } from "@components/QRScanner";

function Prizes() {
  const { user } = useAuth() as { user: IStaff };
  const router = useRouter();
  const pauseScanRef = useRef(false);
  const [scanFeedback, setScanFeedback] = useState(FEEDBACK.SCANNING);
  const [showQRScanner, setShowQRScanner] = useState(true);

  const handleUUID = (uuid: String) => {
    router.push(`/staff/prizes/${uuid}`);
  };

  return (
    <Layout title="Prizes" description="Mark a prize as redeemed">
      <div className="mt-5 flex flex-grow select-none justify-center">
        <QRScanner
          topText={user.email}
          handleQRCode={handleUUID}
          isScanPaused={pauseScanRef}
          scanFeedback={scanFeedback}
          setScanFeedback={setScanFeedback}
          showScanner={showQRScanner}
          setShowScanner={setShowQRScanner}
          removeCloseButton={true}
        />
      </div>
    </Layout>
  );
}

export default withAuth(Prizes);
