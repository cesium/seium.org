import React from "react";
import { useEffect, useState } from "react";
import Owners from "../components/moonstone/owners/";
import SectionHeader from "../components/moonstone/SectionHeader";
import API from "../utils/api";
import "../assets/css/moonstone.css";
import "../assets/css/badgedex.css";
import Button from "../components/moonstone/Button";
import Header from "../components/moonstone/Header";
import Achievement from "../components/moonstone/Achievement";

function Badge({ badge_info, resetBadge }) {
  const [badge, setBadge] = useState(badge_info);

  useEffect(() => {
    const fetchBadge = async () => {
      const { data } = await API.get(`/api/v1/badges/${badge_info.id}`);
      const badge = data.data;

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
          subtitle={`${badge.description}.`}
        ></SectionHeader>
        <Button width="88px" onClick={resetBadge}>
          Go Back
        </Button>
      </div>

      <div className="main">
        <div className="spinningWheel">
          <div className="badge-info" style={{ width: "100%" }}>
            <Header
              style={{ width: "100%", padding: "14px 0 20px 0" }}
              title="Badge"
            >
              <div
                style={{
                  display: "flex",
                  whiteSpace: "nowrap",
                  // paddingTop: "7%",
                }}
              >
                <Achievement text={`💰 ${badge.tokens} Tokens `} />
              </div>
            </Header>
            <img src={badge.avatar} className="big" alt="Error"></img>
            {/* <div className="desc">{badge.description}</div> */}
          </div>
        </div>
        <Owners owners={badge.attendees}></Owners>
      </div>
    </div>
  );
}

export default Badge;
