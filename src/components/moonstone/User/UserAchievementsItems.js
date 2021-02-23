import { useEffect, useState } from "react";
import { useUser } from "../context/user";
import Achievement from "../Achievement";

import API from "../../../utils/api";

const UserAchievementsItems = (props) => {
  const { user } = useUser();
  const [info, setInfo] = useState({
    badge_count: "?",
    token_balance: "?",
    entries: "?"
  });

  const { badge_count, token_balance, entries } = info;

  useEffect(async () => {
    if (user?.id) {
      const {
        data: { data: attendee },
      } = await API.get(`/api/v1/attendees/${user.id}`);
      console.log(attendee);
      setInfo(attendee);
    }
  }, [user.id, props.state]);

  return (
    <>
      <div>
        <Achievement
          emoji="💰"
          quantity={token_balance}
          item="Token"
          style={props.customStyle}
        />
      </div>
      <div>
        <Achievement
          emoji="🏆"
          quantity={entries}
          item={"Entries"}
          style={props.customStyle}
        />
      </div>
      <div>
        <Achievement
          emoji="🥇"
          quantity={badge_count}
          item={"Badge"}
          style={props.customStyle}
        />
      </div>
    </>
  );
};

export default UserAchievementsItems;
