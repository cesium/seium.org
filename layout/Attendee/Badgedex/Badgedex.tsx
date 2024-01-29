import { useState, useEffect } from "react";
import { withAuth, useAuth } from "@context/Auth";

import { getAllBadges } from "@lib/api";

import Layout from "@components/Layout";

import ErrorMessage from "@components/ErrorMessage";
import Badge from "@components/Badge";
import BadgeFilter from "@components/BadgeFilter";
import GoToTop from "@components/GoToTop";
import { IBadge } from "@context/Auth";

interface UserWithBadges {
  badges: IBadge[];
}

function Badgedex() {
  const { user } = useAuth() as { user: UserWithBadges };
  const [allBadges, updateAllBadges] = useState<IBadge[]>([]);
  const [all, updateAll] = useState(true);
  const [filter, updateFilter] = useState(null);
  const [error, setError] = useState();
  const [currentBadges, setCurrentBadges] = useState(allBadges);

  useEffect(() => {
    getAllBadges()
      .then((response) => updateAllBadges(response.data))
      .catch((errors) => {
        setError(errors);
      });
  }, []);

  useEffect(() => {
    const badges = all ? allBadges : user.badges;
    setCurrentBadges(
      badges.filter((badge) => badge.type == filter || filter == null)
    );
  }, [user, allBadges, filter, all]);

  return (
    <Layout title="BadgeDex" description="Explore all existing badges">
      <div className="border-slate-400 pt-10 text-white xl:flex xl:flex-auto">
        <div className="m-auto flex flex-auto select-none space-x-5">
          <p className="mb-10 text-2xl font-bold xl:mb-0">Filter by</p>
          <BadgeFilter onChange={updateFilter} />
        </div>
        <div className="flex w-auto font-bold lg:w-1/2 xl:w-auto">
          <div className="my-auto select-none text-2xl">Show</div>
          <div className="flex select-none flex-row-reverse gap-x-8">
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
        {currentBadges.map((badge) => (
          <Badge
            key={badge.id}
            owned={!all || user.badges.map((b) => b.id).includes(badge.id)}
            {...badge}
          />
        ))}
      </div>

      {currentBadges.length == 0 && (
        <div className="flex h-full w-full items-center justify-center">
          <h2 className="mt-2 text-lg font-medium text-white">
            No Badges to show!
          </h2>
        </div>
      )}

      {error && <ErrorMessage />}
      <GoToTop />
    </Layout>
  );
}

export default withAuth(Badgedex);
