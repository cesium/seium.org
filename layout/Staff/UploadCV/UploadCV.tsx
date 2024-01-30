import { useState, useEffect } from "react";
import { withAuth, useAuth, IStaff } from "@context/Auth";
import { getStaffCV, uploadStaffCV } from "@lib/api";
import Layout from "@components/Layout";
import UploadSection from "./components/UploadSection";

function UploadCV() {
  const { user } = useAuth() as { user: IStaff };
  const [staff, setStaff] = useState(null);

  useEffect(() => {
    getStaffCV(user.id).then((response) => setStaff(response));
  }, []);

  const submitCV = (f: File) => {
    const formData = new FormData();
    formData.append("staff[cv]", f);
    setStaff(null);
    uploadStaffCV(user.id, formData).then((response) => {
      setStaff(response);
    });
  };

  return (
    <Layout title="Upload CV" description="Upload your curriculum">
      <div>{staff && <UploadSection cv={staff.cv} onSubmit={submitCV} />}</div>
    </Layout>
  );
}

export default withAuth(UploadCV);
