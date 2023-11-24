import { useState, useEffect } from "react";
import { withAuth, useAuth } from "@context/Auth";

import { getAllBadges } from "@lib/api";

import Layout from "@components/Layout";

import ErrorMessage from "@components/ErrorMessage";
import Badge from "@components/Badge";
import BadgeFilter from "@components/BadgeFilter";
import GoToTop from "@components/GoToTop";

export interface Badges {
  avatar: string;
  begin: string;
  description: string;
  end: string;
  id: number;
  name: string;
  tokens: number;
  type: number;
}

interface UserWithBadges {
  user: {
    badges: Badges[];
  };
}

function Badgedex() {
  const { user }: UserWithBadges = useAuth();
  const [allBadges, updateAllBadges] = useState<Badges[]>([]);
  const [all, updateAll] = useState(true);
  const [filter, updateFilter] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    getAllBadges()
      .then((response) => updateAllBadges(response.data))
      .catch((errors) => {
        setError(errors);
      });
  }, []);

  return (
    <Layout title="BadgeDex" description="Explore all existing badges">
      <div className="border-slate-400 pt-10 text-white xl:flex xl:flex-auto">
        <div className="m-auto flex flex-auto space-x-5">
          <p className="mb-10 text-2xl font-bold xl:mb-0">Filter by</p>
          <BadgeFilter onChange={updateFilter} />
        </div>
        <div className="flex w-auto font-bold lg:w-1/2 xl:w-auto">
          <div className="my-auto text-2xl">Show</div>
          <div className="flex flex-row-reverse gap-x-8">
            <button
              className={`font-iregular bg-${
                all ? "white" : "quinary"
              } h-12 items-center rounded-full px-4 py-1 text-center text-black`}
              onClick={(e) => {
                updateAll(false);
              }}
            >
              MINE
            </button>
            <button
              className={`font-iregular bg-${
                all ? "quinary" : "white"
              } ml-12 h-12 items-center rounded-full px-4 py-1 text-center text-black`}
              onClick={(e) => {
                updateAll(true);
              }}
            >
              ALL
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-5 text-white xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {all
          ? allBadges
              .filter((badge) => badge.type == filter || filter == null)
              .map((badge) => (
                <Badge
                  key={badge.id}
                  owned={user.badges.map((b) => b.id).includes(badge.id)}
                  {...badge}
                />
              ))
          : user.badges
              .filter((badge) => badge.type == filter || filter == null)
              .map((badge) => <Badge key={badge.id} owned={true} {...badge} />)}
      </div>

      {error && <ErrorMessage />}
      <GoToTop />
    </Layout>
  );
}

export default withAuth(Badgedex);
