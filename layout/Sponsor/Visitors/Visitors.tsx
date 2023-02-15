import { useState, useEffect } from "react";
import { withAuth, useAuth } from "@context/Auth";

import Pagination from "../components/Pagination";
import Layout from "@components/Layout";

import { downloadCVInBulk, getCompanyVisitors } from "@lib/api";

interface Props {}

interface Visitor {
  id: string;
  name: string;
  email: string;
  avatar: string;
  cv: string;
}

const navigation = ["scanner", "visitors"];

const SponsorVisitors: React.FC<Props> = () => {
  const { user } = useAuth();
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [visitorsPerPage] = useState(30);

  const indexOfLastVisitor = currentPage * visitorsPerPage;
  const indexOfFirstVisitor = indexOfLastVisitor - visitorsPerPage;
  const currentVisitors = visitors.slice(
    indexOfFirstVisitor,
    indexOfLastVisitor
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
      .catch((error) => console.log(error));
  }, [user]);

  return (
    <Layout
      title="Visitantes"
      description="Veja quem está a visitar a sua empresa e já recebeu o seu badge"
      navigation={navigation}
      basePath="sponsor"
    >
      <div className="mt-5 h-screen text-white">
        {visitors.filter((v) => v.cv != null).length > 0 && (
          <button
            className="m-auto mb-5 block rounded-full bg-quinary px-5 py-2 font-ibold text-2xl text-white"
            onClick={downloadCVs}
          >
            {downloading ? "Downloading" : "Download All CV's"}
          </button>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {currentVisitors.map((visitor) => (
            <div
              key={visitor.id}
              className="hover:b-4 m-2 mb-4 flex flex-col items-center justify-center rounded-lg p-2 hover:border-blue-500"
            >
              <img
                alt={visitor.name}
                src={visitor.avatar}
                className="mb-2 h-40 w-40 rounded-full border-2 border-white object-cover hover:border-pink-500"
              />
              <p className="text-center">{visitor.name}</p>
              <p className="text-center">{visitor.email}</p>
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
