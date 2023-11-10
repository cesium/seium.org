import { useState, useEffect } from "react";
import { withAuth, useAuth } from "@context/Auth";

import { getAllBadges } from "@lib/api";

import Layout from "@components/Layout";

import Pagination from "./components/Pagination";
import ErrorMessage from "@components/ErrorMessage";
import Badge from "@components/Badge";
import BadgeFilter from "@components/BadgeFilter";

interface Badges {
  id: string;
  type: string;
  name: string;
  description: string;
}

function Badgedex() {
  const { user } = useAuth();
  const [allBadges, updateAllBadges] = useState<Badges[]>([]);
  const [all, updateAll] = useState(true);
  const [filter, updateFilter] = useState(null);
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [badgesPerPage] = useState(10);

  const indexOfLastVisitor = currentPage * badgesPerPage;
  const indexOfFirstVisitor = indexOfLastVisitor - badgesPerPage;
  const currentBadges: any = allBadges.slice(
    indexOfFirstVisitor,
    indexOfLastVisitor,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (currentBadges.length === 0 && currentPage !== 1) {
    paginate(0);
  }

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
          ? currentBadges
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
      {all && (
        <div className="mt-5">
          <Pagination
            badgesPerPage={badgesPerPage}
            totalBadges={allBadges.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      )}
      {error && <ErrorMessage />}
    </Layout>
  );
}

export default withAuth(Badgedex);
