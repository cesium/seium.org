import { useState, useEffect } from "react";
import { withAuth, useAuth } from "@context/Auth";
import Base from "../components/Base";
import { getCompanyVisitors } from "@lib/api";

interface Props {}

interface Visitor {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

const navigation = ["scanner", "dashboard", "visitors"];

const SponsorVisitors: React.FC<Props> = () => {
  const { user } = useAuth();
  const [visitors, setVisitors] = useState<Visitor[]>([]);

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
        <div className="grid grid-cols-3 lg:grid-cols-5">
          {visitors.map((visitor) => (
            <a
              href={`/attendees/${visitor.id}`}
              className="m-2 mb-4 flex flex-col items-center justify-center rounded-lg border-2 p-2"
            >
              <img
                src={visitor.avatar}
                width={100}
                height={100}
                className="rounded-full"
              />
              <p className="text-center">{visitor.name}</p>
              <p className="text-center">{visitor.email}</p>
            </a>
          ))}
        </div>
      </div>
    </Base>
  );
};

export default withAuth(SponsorVisitors);
