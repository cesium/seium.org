import { API } from "../api";

export async function redeemBadge(uuid: string, selectedBadge: string) {
  const response = await API.post("/api/v1/redeems", {
    redeem: {
      attendee_id: uuid,
      badge_id: selectedBadge,
    },
  });

  return response.data;
}

export async function getAllBadges() {
  const response = await API.get("/api/v1/badges");

  return response.data;
}

export async function giveBadge(attendee_id: string, badge_id: string) {
  const response = await API.post("/api/v1/redeems", {
    redeem: {
      attendee_id,
      badge_id,
    },
  });

  return response.data;
}
