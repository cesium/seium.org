import { useEffect, useState } from "react";
import { useUser } from "../context/user";
import Achievement from "../Achievement";

import API from "../../../utils/api";

const pluralize = (word, number) => (number !== 1 ? `${word}s` : word);

const UserAchievementsItems = (props) => {
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
  }, [user.id, props.state]);

  return (
    <>
      <div>
        <Achievement
          text={`💰 ${token_balance} ${pluralize("Token", token_balance)}`}
          style={props.customStyle}
        />
      </div>
      <div>
        <Achievement
          text={`🥇 ${badge_count} ${pluralize("Badge", badge_count)}`}
          style={props.customStyle}
        />
      </div>
    </>
  );
};

export default UserAchievementsItems;
