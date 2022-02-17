import { useState, useEffect, useRef } from "react";

import { withAuth } from "/components/Auth";

import { getAllBadges, giveBadge } from "/lib/api";

import Base from "/components/moonstone/staff/utils/Base";
import ErrorMessage from "/components/utils/ErrorMessage";
import Filter from "/components/moonstone/user/badgedex/Filter";
import QRScanner, { FEEDBACK } from "/components/moonstone/utils/QRScanner";

const navigation = ["badges", "prizes", "identifier"];

function ManagerBadges() {
  const [allBadges, updateAllBadges] = useState([]);
  const [filter, updateFilter] = useState(null);
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
    return null;
  }, [feedback]);

  const badges = allBadges.filter(
    (badge) => badge.type == filter || filter == null
  );

  const handleBadgeSelected = (badge) => {
    badgeRef.current = badge;
    setScanner(true);
  };

  const handleUUID = (uuid) => {
    let feedback_var;
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
    <Base
      href="badges"
      title="Badges"
      description="Award a badge"
      navigation={navigation}
    >
      {showScanner ? (
        <div className="mt-5">
          <QRScanner
            handleCode={handleUUID}
            pauseRef={pauseRef}
            text={badgeRef?.current.name}
            feedback={feedback}
            showScanner={showScanner}
            setScanner={setScanner}
          />
        </div>
      ) : (
        <>
          <div className="pt-10 xl:flex xl:flex-auto">
            <div className="flex flex-auto space-x-5">
              <p className="mb-10 text-2xl font-bold xl:mb-0">Filter by</p>
              <Filter onChange={updateFilter} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="h-full w-full cursor-pointer"
                onClick={() => handleBadgeSelected(badge)}
              >
                <img src={badge.avatar} alt={badge.name} />
                <div className="flex flex-col justify-items-center text-center font-iregular">
                  <div>{badge.name}</div>
                  <div>{badge.tokens} 💰 </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {error && <ErrorMessage />}
    </Base>
  );
}

export default withAuth(ManagerBadges);
