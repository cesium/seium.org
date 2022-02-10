import axios from "axios";
import * as USER from "./user";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  responseType: "json",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function sign_up(
  email,
  password,
  password_confirmation,
  name,
  nickname,
  id
) {
  const response = await API.post("/api/auth/sign_up", {
    email: email,
    password: password,
    password_confirmation: password_confirmation,
    attendee: {
      id: id,
      nickname: nickname,
      name: name,
    },
  });

  return response.data;
}

export async function getLeaderboard(date) {
  const response = await API.get(`/api/v1/leaderboard/${date}`);

  return response.data;
}

export async function sign_in({ email, password }) {
  const response = await API.post("/api/auth/sign_in", {
    email,
    password,
  });

  return response.data;
}

export async function getReedemable(uuid) {
  const response = await API.get(`/api/v1/store/redeem/${uuid}`);

  return response.data;
}

export async function redeem(attendee, prize, amount) {
  const response = await API.post("/api/v1/store/redeem", {
    redeem: {
      attendee_id: attendee,
      redeemable: prize,
      quantity: amount,
    },
  });

  return response.data;
}

export async function redeemBadge(uuid, selectedBadge) {
  const response = await API.post("/api/v1/redeems", {
    redeem: {
      attendee_id: uuid,
      badge_id: selectedBadge,
    },
  });

  return response.data;
}

export async function sign_out() {
  const response = await API.delete("/api/auth/sign_out");

  return response.data;
}

export async function getAttendee(id) {
  const response = await API.get(`/api/v1/attendees/${id}`);

  return response.data;
}

export async function getWheelPrizes() {
  const response = await API.get("/api/v1/roulette/prizes");

  return response.data;
}

export async function getAllBadges() {
  const response = await API.get("/api/v1/badges");

  return response.data;
}

export async function getWheelLatestWins() {
  const response = await API.get("/api/v1/roulette/latestwins");

  return response.data;
}

export async function spinWheel() {
  const response = await API.post("/api/v1/roulette");

  return response.data;
}

export async function getCurrentUser() {
  const response = await API.get("/api/v1/user");
  const { type } = response.data;

  if (type) {
    switch (type) {
      case USER.ROLES.ATTENDEE:
        const { data: attendee } = await API.get("/api/v1/attendee");
        const {
          data: { data: extras },
        } = await API.get(`/api/v1/attendees/${attendee.id}`);

        return { ...attendee, ...extras, type };
      case USER.ROLES.MANAGER:
        return response.data;
      default:
        throw new Error(`Unknown USER TYPE: ${type}`);
    }
  }

  return response.data;
}

export async function getBadge(id) {
  const response = await API.get(`/api/v1/badges/${id}`);

  return response;
}

export async function editUser(values) {
  const data = new FormData();

  for (const key in values) {
    if (!values[key]) continue;

    switch (key) {
      case "user[photo]":
        data.append(key, values[key].file);
        break;

      case "user[birthday]":
        data.append(key, values[key].format("YYYY-MM-DD"));
        break;

      default:
        data.append(key, values[key]);
        break;
    }
  }

  const response = await API.put("/api/auth/me", data, {
    headers: undefined,
  });

  return response.data;
}

export async function giveBadge(attendee_id, badge_id) {
  const response = await API.post("/api/v1/redeems", {
    redeem: {
      attendee_id,
      badge_id,
    },
  });

  return response.data;
}

export async function reset_password({ token, password }) {
  const user = { password };
  const response = await API.put(`/api/auth/passwords/${token}`, {
    user,
  });

  return response.data;
}

export async function send_reset_email({ email }) {
  const user = { email };
  const response = await API.post("/api/auth/passwords", {
    user,
  });

  return response.data;
}

export async function getProducts() {
  const response = await API.get("/api/v1/store");

  return response.data;
}

export async function getProduct(id) {
  const response = await API.get(`/api/v1/store/${id}`);

  return response;
}

export async function buyProduct(id) {
  const response = await API.post(`/api/v1/store/buy/`, {
    redeemable: { redeemable_id: id },
  });
  return response.data;
}

export default API;
