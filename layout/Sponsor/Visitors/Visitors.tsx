import { useState, useEffect } from "react";
import { withAuth, useAuth } from "@context/Auth";
import Base from "../components/Base";
import Pagination from "../components/Pagination";
import { getCompanyVisitors } from "@lib/api";

interface Props {}

interface Visitor {
  id: string;
  name: string;
  email: string;
  avatar: string;
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
    <Base
      href="visitors"
      title="Visitantes"
      description="Veja quem está a visitar a sua empresa e já recebeu o seu badge"
      navigation={navigation}
    >
      <div className="mt-5 h-screen text-white">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {currentVisitors.map((visitor) => (
            <a
              href={`/attendees/${visitor.id}`}
              className="hover:b-4 m-2 mb-4 flex flex-col items-center justify-center rounded-lg p-2 hover:border-blue-500"
            >
              <img
                src={visitor.avatar}
                className="mb-2 h-40 w-40 rounded-full border-2 border-white object-cover hover:border-pink-500"
              />
              <p className="text-center">{visitor.name}</p>
              <p className="text-center">{visitor.email}</p>
            </a>
          ))}
        </div>
        <div className="mt-5">
          <Pagination
            visitorsPerPage={visitorsPerPage}
            totalVisitors={visitors.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </Base>
  );
};

export default withAuth(SponsorVisitors);
