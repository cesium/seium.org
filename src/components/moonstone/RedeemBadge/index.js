import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import Button from "../Button";

import API from "../../../utils/api";

function RedeemBadge(props) {
  const [referral, setReferral] = useState("");

  const redeem = () => {
    API.post(`/api/v1/referrals`, { id: referral })
      .then((response) => {
        setReferral("");
        NotificationManager.success(response.data.referral, "Success", 3000);
        props.incrementState();
      })
      .catch((error) => {
        NotificationManager.error("Invalid referral code", "Error", 3000);
      });
  };

  return (
    <div className="sendCode">
      <input
        className="code"
        value={referral}
        onChange={(event) => setReferral(event.target.value)}
        type="text"
        placeholder="CODE"
      />
      <Button onClick={redeem} width="109px">
        REDEEM
      </Button>
    </div>
  );
}

export default RedeemBadge;
