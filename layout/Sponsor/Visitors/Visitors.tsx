import { useState, useEffect } from "react";
import { withAuth, useAuth } from "@context/Auth";

import Layout from "@components/Layout";

import { downloadCVInBulk, getCompanyVisitors } from "@lib/api";

interface Visitor {
  id: string;
  name: string;
  email: string;
  avatar: string;
  cv: string;
}

const SponsorVisitors: React.FC = () => {
  const { user } = useAuth();
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [downloading, setDownloading] = useState<boolean>(false);

  const downloadCVs = () => {
    setDownloading(true);
    downloadCVInBulk(user.id)
      .then((response) => {
        /*
      The way the download works is by creating a temporary
      URL for the zip file the backend returns to live in, and
      then forcing a download by programmatically click a link
      (a tag) to that URL

      Source: https://stackoverflow.com/questions/41938718/how-to-download-files-using-axios
       */
        const href = URL.createObjectURL(response);
        const link = document.createElement("a");
        //Make sure the element is not visible
        link.classList.add("hidden");
        link.href = href;
        link.setAttribute("download", "sei_cvs.zip");
        document.body.appendChild(link);
        link.click();

        //clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      })
      .finally(() => setDownloading(false));
  };

  useEffect(() => {
    getCompanyVisitors(user.id)
      .then((response) => {
        if (response) {
          setVisitors(response.data);
        }
      })
      // FIXME: This should be displayed as a toast notification
      .catch((error) => console.log(error));
  }, [user]);

  return (
    <Layout
      title={`Visitantes (${visitors.length})`}
      description="Veja quem está a visitar a sua empresa e já recebeu o seu badge"
    >
      <div className="mt-5 h-screen text-white">
        <button
          className="font-terminal-uppercase m-auto mb-5 block select-none rounded-full bg-quinary px-5 py-2 text-2xl text-white"
          onClick={downloadCVs}
        >
          {downloading ? "Downloading" : "Download All CVs"}
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {visitors.map((visitor) => (
            <div
              key={visitor.id}
              className="hover:b-4 m-2 mb-4 flex flex-col items-center justify-center rounded-lg p-2 hover:border-blue-500"
            >
              {visitor.avatar ? (
                <img
                  alt={visitor.name}
                  src={visitor.avatar}
                  className="mb-2 h-40 w-40 select-none rounded-full border-2 border-white object-cover"
                />
              ) : (
                <img
                  alt={visitor.name}
                  src="/images/mascot-head.png"
                  className="mb-2 h-40 w-40 select-none rounded-full border-2 border-white object-cover"
                />
              )}
              <p className="text-center">{visitor.name}</p>
              <a
                href={`mailto:${visitor.email}`}
                className="text-center hover:text-quinary hover:underline"
              >
                {visitor.email}
              </a>
              {visitor.cv ? (
                <a
                  href={visitor.cv}
                  className="text-quinary underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  CV
                </a>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(SponsorVisitors);
