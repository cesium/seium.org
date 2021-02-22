import { useState } from "react/cjs/react.development";
import { NotificationManager } from "react-notifications";
import Button from "../Button";

import API from "../../../utils/api";

function RedeemBadge() {
  const [referral, setReferral] = useState("");

  const redeem = () => {
    API.post(`/api/v1/referrals`, { id: referral })
      .then((response) => {
        setReferral("");
        NotificationManager.success(response.data.referral, "Success", 3000);
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.status === 400) {
          NotificationManager.error("Invalid referral code", "Error", 3000);
        } else {
          NotificationManager.error(
            error.response.data?.referral ||
              error.response.data?.errors?.unique_attendee_badge[0],
            "Error",
            3000
          );
        }
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
