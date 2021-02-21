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
  const [is_loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBadge = async () => {
      const { data } = await API.get(`/api/v1/badges/${badge_info.id}`);
      const badge = data.data;

      setBadge(badge);
      setLoading(false);
    };
    fetchBadge();
  }, [badge_info]);

  const badge_types = {
    4: "Companies",
    6: "Talks",
    7: "Workshops",
    2: "Challenges",
    3: "Days",
    8: "Others",
  };

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
              style={{ width: "100%", padding: "11px 0 20px 0" }}
              title={badge_types[badge.type]}
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
        {!is_loading && <Owners owners={badge.attendees}></Owners>}
      </div>
    </div>
  );
}

export default Badge;
