import { IAttendee, useAuth, withAuth } from "@context/Auth";

import Layout from "@components/Layout";
import QRCodeCanvas from "@components/QRCodeCanvas";

function Identifier() {
  const { user } = useAuth() as { user: IAttendee };

  return (
    <Layout
      title="Identifier"
      description="Scan this QR Code to identify yourself to the staff"
    >
      <div className="mt-12 grid-cols-2 overflow-hidden">
        <div className="flex h-full select-none justify-center overflow-hidden rounded-md lg:h-96">
          <QRCodeCanvas uuid={user.id} />
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Identifier);
