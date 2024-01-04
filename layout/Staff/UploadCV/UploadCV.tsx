import { useState, useEffect } from "react";
import { withAuth } from "@context/Auth";
import { getStaffCV, uploadStaffCV } from "@lib/api";
import Layout from "@components/Layout";
import UploadSection from "./components/UploadSection";

function UploadCV() {
  const [cv, setCV] = useState(null);

  useEffect(() => {
    getStaffCV().then((response) => setCV(response.data));
  }, []);

  const submitCV = (f: File) => {
    const formData = new FormData();
    formData.append("staff[cv]", f);
    uploadStaffCV(formData);
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
