import { useState, useEffect, useRef } from "react";

import { getAllBadges, giveBadge } from "@lib/api";

import { withAuth } from "@context/Auth";

import Layout from "@components/Layout";
import ErrorMessage from "@components/ErrorMessage";
import Filter from "@components/BadgeFilter";
import QRScanner, { FEEDBACK } from "@components/QRScanner";
import Badge from "@components/Badge";
import GoToTop from "@components/GoToTop";

const Badges: React.FC = () => {
  const [allBadges, updateAllBadges] = useState([]);
  const [filter, updateFilter] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const pauseRef = useRef(false);
  const badgeRef = useRef(null);
  const [scanFeedback, setScanFeedback] = useState(FEEDBACK.SCANNING);
  const [showScanner, setScanner] = useState(false);
  const [error, updateError] = useState(false);

  useEffect(() => {
    getAllBadges()
      .then((response) => {
        updateAllBadges(response.data);
      })
      .catch((_) => updateError(true));
  }, []);

  const handleBadgeSelected = (badge: string) => {
    badgeRef.current = badge;
    setScanner(true);
  };

  const handleUUID = (uuid: string) => {
    let feedback_var = FEEDBACK.FAILURE;

    giveBadge(uuid, badgeRef.current.id)
      .then((response) => {
        if (response.redeem) {
          feedback_var = FEEDBACK.SUCCESS;
        } else {
          feedback_var = FEEDBACK.FAILURE;
        }
      })
      .catch((errors) => {
        const error = errors.response.data.errors;
        if (error?.unique_attendee_badge) {
          feedback_var = FEEDBACK.ALREADY_HAS_BADGE;
        } else if (error.end_badge) {
          feedback_var = FEEDBACK.OUT_OF_PERIOD;
        } else {
          feedback_var = FEEDBACK.FAILURE;
        }
      })
      .finally(() => setScanFeedback(feedback_var));
  };

  return (
    <Layout title="Badges" description="Award a badge">
      {showScanner ? (
        <div className="mt-5 flex flex-grow select-none justify-center">
          <QRScanner
            handleQRCode={handleUUID}
            isScanPaused={pauseRef}
            topText={badgeRef?.current.name}
            scanFeedback={scanFeedback}
            setScanFeedback={setScanFeedback}
            showScanner={showScanner}
            setShowScanner={setScanner}
          />
        </div>
      ) : (
        <>
          <div className="border-slate-400 pt-10 text-white xl:flex xl:flex-auto xl:items-start">
            <div className="flex flex-auto select-none space-x-5">
              <p className="mb-10 text-2xl font-bold xl:mb-0">Filter by</p>
              <Filter onChange={updateFilter} />
            </div>
            <div className="flex w-auto font-bold lg:w-1/2 xl:w-auto">
              <div className="flex w-full select-none flex-row-reverse gap-x-8">
                <input
                  type="text"
                  value={searchInput}
                  placeholder="Search by name"
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
                  name="search"
                  id="search"
                  className="mt-1 w-full rounded-full border-2 border-quinary py-2 pl-3 pr-10 text-sm text-black outline-none focus:border-quinary/50"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-5 text-white xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {allBadges
              .filter((badge) => badge.type == filter || filter == null)
              .filter(
                (badge) =>
                  searchInput == "" ||
                  badge.name.toLowerCase().includes(searchInput.toLowerCase())
              )
              .map((badge, index) => (
                <Badge
                  key={index}
                  id={badge.id}
                  name={badge.name}
                  avatar={badge.avatar}
                  tokens={badge.tokens}
                  owned={true}
                  disableLink={true}
                  disableOwnedHighlight={true}
                  onClick={() => handleBadgeSelected(badge)}
                />
              ))}
          </div>
        </>
      )}

      {error && <ErrorMessage />}
      <GoToTop />
    </Layout>
  );
};

export default withAuth(Badges);
