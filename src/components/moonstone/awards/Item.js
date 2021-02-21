import { useState } from "react";
import Button from "../Button";
import API from "../../../utils/api";

const parseError = (error) => {
  let r = "";

  for (const [key, value] of Object.entries(error)) {
    r += `${key}: ${value}`;
  }

  return r;
};

const Item = (props) => {
  const [data, setData] = useState({ isSubmitting: false, errorMessage: null });

  const isOutOfStockOrLimit = () => {
    return props.stock === 0 || props.limit === 0;
  };

  const buyItems = () => {
    if (data.isSubmitting) return null;
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    API.post("/api/v1/store/buy", {
      redeemable: {
        redeemable_id: props.id,
      },
    })
      .then((res) => {
        alert(res.data.Redeemable);

        props.incrementState();

        setData({
          ...data,
          isSubmitting: false,
          errorMessage: null,
        });
      })
      .catch((error) => {
        let errorMessage = null;
        if (error.response) {
          errorMessage = parseError(error.response.data.errors);
        } else if (error.request) {
          errorMessage = "The server did not respond. Bad server!";
        } else {
          errorMessage =
            "Something happened and we don't know what. Reload and try again?";
        }

        alert(errorMessage);

        setData({
          ...data,
          isSubmitting: false,
          errorMessage: "ups",
        });
      });
  };

  return (
    <div className="awardItem" disabled={isOutOfStockOrLimit}>
      <img src={props.img} alt="Award 1" />
      <Button
        onClick={buyItems}
        style={{ margin: "20px 0 10px 0" }}
        width="208px"
        inner={props.price + " tokens 💰"}
      >
        REDEEM
      </Button>
      {props.stock !== undefined ? (
        <p className="stock">{props.stock} available</p>
      ) : (
        ""
      )}
      {props.limit !== undefined ? (
        <p className="limit">You can redeem {props.limit} more</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Item;
