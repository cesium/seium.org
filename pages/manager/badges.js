import { useState, useEffect, useRef } from "react";

import { withAuth } from "/components/Auth";
import { useAuth } from "/components/Auth";

import { getAllBadges } from "/lib/api";

import Base from "/components/moonstone/staff/utils/Base";
import ErrorMessage from "/components/utils/ErrorMessage";
import Filter from "/components/moonstone/user/badgedex/Filter";
import QRScanner from "/components/moonstone/utils/QRScanner";

import { giveBadge } from "/lib/api";

function ManagerBadges() {
  const [allBadges, updateAllBadges] = useState([]);
  const [filter, updateFilter] = useState(null);
  const pauseRef = useRef(false);
  const badgeRef = useRef(null);
  const successRef = useRef(null);
  const [feedbackText, setFeedbackText] = useState("Scanning");
  const [showScanner, setScanner] = useState(false);
  const [error, updateError] = useState(false);
  const { user } = useAuth();

  useEffect(() => requestBadges(), []);
  const requestBadges = () => {
    getAllBadges()
      .then((response) => updateAllBadges(response.data))
      .catch((_) => updateError(true));
  };

  const badges = allBadges
    .filter((badge) => {
      const now = new Date();
      const begin = new Date(badge.begin);
      const end = new Date(badge.end);
      if (now >= begin && now <= end) {
        return true;
      }
      return false;
    })
    .filter((badge) => {
      let result = true;
      if (filter && badge.type != filter) {
        result = false;
      }
      return result;
    });

  const handleBadgeSelected = (badge) => {
    badgeRef.current = badge;
    setScanner(true);
  };

  const resetScannerState = () => {
    new Promise((r) => setTimeout(r, 500)).then(() => {
      pauseRef.current = false;
      successRef.current = null;
      setFeedbackText("Scanning");
    });
  };

  const handleUUID = (uuid) => {
    console.log(uuid);
    giveBadge(uuid, badgeRef.current.id)
      .then((response) => {
        if (response.redeem) {
          successRef.current = true;
          navigator.vibrate([20, 10, 20]);
          setFeedbackText("Success");
          resetScannerState();
        } else if (response.errors?.unique_attendee_badge) {
          successRef.current = false;
          setFeedbackText("User has badge");
          resetScannerState();
        } else {
          successRef.current = false;
          setFeedbackText("Failure");
          resetScannerState();
        }
      })
      .catch((_) => {
        successRef.current = false;
        setFeedbackText("Failure");
        resetScannerState();
      });
  };

  const badgeComponents = badges.map((badge, index) => (
    <div
      key={index}
      className="h-full w-full cursor-pointer"
      onClick={() => handleBadgeSelected(badge)}
    >
      <img src={badge.avatar} alt={badge.name} />
      <div className="grid grid-rows-2 justify-items-center text-center font-iregular">
        <div>{badge.name}</div>
        <div>{badge.tokens} 💰 </div>
      </div>
    </div>
  ));

  return (
    <Base href="badges" title="Badges" description="Award a badge">
      {showScanner ? (
        <div className="mt-5">
          <QRScanner
            handleCode={handleUUID}
            pauseRef={pauseRef}
            text={badgeRef?.current.name}
            successRef={successRef}
            feedbackText={feedbackText}
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
            {badgeComponents}
          </div>
        </>
      )}
      {error && <ErrorMessage />}
    </Base>
  );
}

export default withAuth(ManagerBadges);
