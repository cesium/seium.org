import { useEffect, useState } from "react";
import { useUser } from "../context/user";
import Header from "../Header";
import SendCode from "../SendCode";

import API from "../../../utils/api";
import UserAchievementsItems from "./UserAchievementsItems";

const UserAchievements = () => {
  const { user } = useUser();
  const [info, setInfo] = useState({ badge_count: "?", token_balance: "?" });

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
      className="achiev-section"
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header title="Achievements" style={{ width: "100%" }} />
      <div className="achiev-container">
        <UserAchievementsItems customStyle={{ marginBottom: "20px", paddingTop: "0" }}/>
      </div>
      <div className="achiev-desc">
        <h4 className="header-4">
          Keep collecting tokens. It's never too late. Hurry up!
        </h4>
      </div>
      <SendCode></SendCode>
    </div>
  );
};

export default UserAchievements;
