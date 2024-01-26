import { useState, useEffect, useRef } from "react";

import { getAllBadges, giveBadge } from "@lib/api";

import { withAuth } from "@context/Auth";

import Layout from "@components/Layout";
import ErrorMessage from "@components/ErrorMessage";
import Filter from "@components/BadgeFilter";
import QRScanner, { FEEDBACK } from "@components/QRScanner";
import Badge from "@components/Badge";
import GoToTop from "@components/GoToTop";

function Badges() {
  const [allBadges, updateAllBadges] = useState([]);
  const [filter, updateFilter] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const pauseRef = useRef(false);
  const badgeRef = useRef(null);
  const [feedback, setFeedback] = useState(FEEDBACK.SCANNING);
  const [showScanner, setScanner] = useState(false);
  const [error, updateError] = useState(false);

  useEffect(() => {
    getAllBadges()
      .then((response) => {
        updateAllBadges(response.data);
      })
      .catch((_) => updateError(true));
  }, []);

  useEffect(() => {
    if (feedback != FEEDBACK.SCANNING) {
      const id = setTimeout(() => {
        pauseRef.current = false;
        setFeedback(FEEDBACK.SCANNING);
      }, 700);

      return () => {
        clearTimeout(id);
      };
    }
    return () => {};
  }, [feedback]);

  const handleBadgeSelected = (badge) => {
    badgeRef.current = badge;
    setScanner(true);
  };

  const handleUUID = (uuid) => {
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
        if (errors.response.data.errors?.unique_attendee_badge) {
          feedback_var = FEEDBACK.ALREADY_HAS;
        } else {
          feedback_var = FEEDBACK.FAILURE;
        }
      })
      .finally(() => {
        setFeedback(feedback_var);
      });
  };

  return (
    <Layout title="Badges" description="Award a badge">
      {showScanner ? (
        <div className="mt-5">
          <QRScanner
            handleCode={handleUUID}
            pauseRef={pauseRef}
            text={badgeRef?.current.name}
            feedback={feedback}
            showScanner={showScanner}
            setScanner={setScanner}
            removeClose={false}
          />
        </div>
      ) : (
        <>
          <div className="border-slate-400 pt-10 text-white xl:flex xl:flex-auto">
            <div className="m-auto flex flex-auto select-none space-x-5">
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
}

export default withAuth(Badges);
