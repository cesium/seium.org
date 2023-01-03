import { API } from "../api";

export async function getProducts() {
  const response = await API.get("/api/v1/store");

  return response.data;
}

export async function getProduct(id: string) {
  const response = await API.get(`/api/v1/store/${id}`);

  return response;
}

export async function buyProduct(id: string) {
  const response = await API.post(`/api/v1/store/buy/`, {
    redeemable: { redeemable_id: id },
  });
  return response.data;
}

export async function referral(id: string) {
  const response = await API.post("/api/v1/referrals", {
    id: id,
  });
  return response.data;
}

export async function redeem(attendee: string, prize: string, amount: string) {
  const response = await API.post("/api/v1/store/redeem", {
    redeem: {
      attendee_id: attendee,
      redeemable: prize,
      quantity: amount,
    },
  });

  return response.data;
}
