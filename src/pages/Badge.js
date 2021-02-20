import React from "react";
import { useEffect, useState } from "react";
import Owners from "../components/moonstone/latestWins/Owners";
import SectionHeader from "../components/moonstone/SectionHeader";
import API from "../utils/api";
import "../assets/css/moonstone.css";
import Button from "../components/moonstone/Button";

function Badge({ badge_info, resetBadge }) {
  const [badge, setBadge] = useState(badge_info);

  useEffect(() => {
    const fetchBadge = async () => {
      const { data } = await API.get(`/api/v1/badges/${badge_info.id}`);
      const badge = data.data;
      console.log("BADGE:", badge);
      setBadge(badge);
    };
    fetchBadge();
  }, [badge_info]);

  return (
    <div className="userProfile">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
          width: "100%",
        }}
      >
        <SectionHeader
          title={`${badge.name} (#${badge.id})`}
          subtitle="Check who already has this badge"
        ></SectionHeader>
        <Button width="88px" onClick={resetBadge}>
          Go Back
        </Button>
      </div>

      <div className="main">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            width: "100%",
          }}
        >
          <img src={badge.avatar} alt="Error"></img>
        </div>
        <Owners owners={badge.attendees}></Owners>
      </div>
    </div>
  );
}

export default Badge;
