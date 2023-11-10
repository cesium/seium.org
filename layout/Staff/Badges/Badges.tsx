import { useState, useEffect, useRef } from "react";

import { getAllBadges, giveBadge } from "@lib/api";

import { withAuth } from "@context/Auth";

import Layout from "@components/Layout";
import ErrorMessage from "@components/ErrorMessage";
import Filter from "@components/BadgeFilter";
import QRScanner, { FEEDBACK } from "@components/QRScanner";

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
          <div className="pt-10 text-white xl:flex xl:flex-auto">
            <div className="flex flex-auto space-x-5">
              <p className="mb-10 text-2xl font-bold xl:mb-0">Filter by</p>

              <Filter onChange={updateFilter} />
            </div>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="text"
                value={searchInput}
                placeholder="Search by name"
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                name="search"
                id="search"
                className="mt-1 w-full rounded-full border-2 border-pink-500 py-2 pl-3 pr-10 text-sm text-black focus:border-pink-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {allBadges
              .filter((badge) => badge.type == filter || filter == null)
              .filter(
                (badge) =>
                  searchInput == "" ||
                  badge.name.toLowerCase().includes(searchInput.toLowerCase()),
              )
              .map((badge, index) => (
                <div
                  key={index}
                  className="h-full w-full cursor-pointer text-white"
                  onClick={() => handleBadgeSelected(badge)}
                >
                  <img src={badge.avatar} alt={badge.name} />
                  <div className="flex flex-col justify-items-center text-center font-iregular text-white">
                    <div>{badge.name}</div>
                    <div>{badge.tokens} 💰 </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
      {error && <ErrorMessage />}
    </Layout>
  );
}

export default withAuth(Badges);
