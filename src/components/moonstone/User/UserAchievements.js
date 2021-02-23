import { useState } from "react";
import Header from "../Header";
import RedeemBadge from "../RedeemBadge";

import UserAchievementsItems from "./UserAchievementsItems";

const UserAchievements = () => {
  const [state, setState] = useState(0);

  const incrementState = () => {
    setState(state + 1);
  };

  return (
    <div className="achiev-section">
      <Header title="Achievements" style={{ width: "100%" }} />
      <div className="profile-achievs">
        <UserAchievementsItems state={state} />
      </div>
      <Header
        title="Checkpoints"
        style={{ marginTop: "40px", width: "100%" }}
      />
      <div className="achiev">
        <p>
          <b>Level 1</b> 5 companies ➔ +30 entries
        </p>
        <p>
          <b>Level 2</b> 10 companies ➔ +60 entries
        </p>
        <p>
          <b>Level 3</b> 15 companies ➔ +100 entries
        </p>
        <p>
          <b>Level 4</b> 20 empresas ➔ +150 entries
        </p>
      </div>
      <div className="achiev-desc">
        <h4 className="header-4">
          Keep collecting tokens. It's never too late. Hurry up!
        </h4>
      </div>
      <RedeemBadge incrementState={incrementState} />
    </div>
  );
};

export default UserAchievements;
