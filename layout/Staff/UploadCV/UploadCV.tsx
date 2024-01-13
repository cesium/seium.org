import { useState, useEffect } from "react";
import { withAuth, useAuth } from "@context/Auth";
import { getStaffCV, uploadStaffCV } from "@lib/api";
import Layout from "@components/Layout";
import UploadSection from "./components/UploadSection";

function UploadCV() {
  const { user, setUser } = useAuth();
  const [cv, setCV] = useState(null);

  useEffect(() => {
    getStaffCV(user.id).then((response) => setCV(response.cv));
  }, []);

  const submitCV = (f: File) => {
    const formData = new FormData();
    formData.append("staff[cv]", f);
    uploadStaffCV(user.id, formData);
  };

  return (
    <Layout title="Upload CV" description="Upload your curriculum">
      <div>
        <UploadSection cv={cv} onSubmit={submitCV} />
      </div>
    </Layout>
  );
}

export default withAuth(UploadCV);
