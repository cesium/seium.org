import { useEffect, useState } from "react";
import { useUser } from "../context/user";
import Achievement from "../Achievement";
import Header from "../Header";
import SendCode from "../SendCode";

import API from "../../../utils/api";

const pluralize = (word, number) => (number !== 1 ? `${word}s` : word);

const UserAchievements = () => {
  const { user } = useUser();
  const [info, setInfo] = useState({ badge_count: "?", token_balance: "?" });

  const { badge_count, token_balance } = info;

  useEffect(async () => {
    if (user?.id) {
      const {
        data: { data: attendee },
      } = await API.get(`/api/v1/attendees/${user.id}`);
      setInfo(attendee);
    }
  }, [user.id]);

  return (
    <div
      className="achiev-section" /*style={{ justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column'}}*/
    >
      <Header title="Achievements" style={{ width: "100%" }} />
      <div className="achiev-container">
        <div>
          <Achievement
            text={`💰 ${token_balance} ${pluralize("Token", token_balance)}`}
            style={{ marginBottom: "20px", paddingTop: "0" }}
          />
          {/* <Achievement
            text="🏆 16 Entries Final Draw"
            style={{ marginBottom: "20px", paddingTop: "0" }}
          /> */}
        </div>
        <div>
          <Achievement
            text={`🥇 ${badge_count} ${pluralize("Badge", badge_count)}`}
            style={{ marginBottom: "20px", paddingTop: "0" }}
          />
          {/* <Achievement
            text="🏁 Level 3 Checkpoint"
            style={{ marginBottom: "20px", paddingTop: "0" }}
          /> */}
        </div>
      </div>
      <div className="achiev-desc">
        <h4>
          You just need 4 more badges to go to Level 4 (and win 10+ entries to
          the final draw). Hurry!
        </h4>
      </div>
      <SendCode></SendCode>
    </div>
  );
};

export default UserAchievements;
