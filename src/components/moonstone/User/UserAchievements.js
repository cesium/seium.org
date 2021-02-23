import { useEffect, useState } from "react";
import { useUser } from "../context/user";
import Header from "../Header";
import RedeemBadge from "../RedeemBadge";

import API from "../../../utils/api";
import Achievement from "../Achievement";

const UserAchievements = () => {
  const { user } = useUser();
  const [info, setInfo] = useState({
    badge_count: "?",
    token_balance: "?",
    entries: "?",
  });

  const { badge_count, token_balance, entries } = info;

  useEffect(async () => {
    if (user?.id) {
      const {
        data: { data: attendee },
      } = await API.get(`/api/v1/attendees/${user.id}`);
      setInfo(attendee);
    }
  }, [user.id]);

  return (
    <div className="achiev-section">
      <Header title="Achievements" style={{ width: "100%" }} />
      <div className="achiev-container">
        <div>
          <Achievement
            emoji="💰"
            quantity={token_balance}
            item="Token"
            style={{ marginBottom: "20px", paddingTop: "0" }}
          />
          <Achievement
            emoji="🏆"
            quantity={entries}
            item="Entry"
            text="Final Draw"
            style={{ marginBottom: "20px", paddingTop: "0" }}
          />
        </div>
        <div>
          <Achievement
            emoji="🥇"
            quantity={badge_count}
            item={"Badge"}
            style={{ marginBottom: "20px", paddingTop: "0" }}
          />
        </div>
      </div>
      <Header title="Checkpoints" style={{ width: "100%" }} />
      <div className="achiev">
        <p>
          <b>Level 1</b> 5 companies ➔ +10 entries
        </p>
        <p>
          <b>Level 2</b> 10 companies ➔ +20 entries
        </p>
        <p>
          <b>Level 3</b> 15 companies ➔ +40 entries
        </p>
        <p>
          <b>Level 4</b> 20 empresas ➔ +100 entries
        </p>
      </div>
      <div className="achiev-desc">
        <h4 className="header-4">
          Keep collecting tokens. It's never too late. Hurry up!
        </h4>
      </div>
      <RedeemBadge />
    </div>
  );
};

export default UserAchievements;
