import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  responseType: "json",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function sign_up({
  email,
  password,
  password_confirmation,
  name,
  nickname,
  uuid,
  course,
}) {
  const response = await API.post("/api/auth/sign_up", {
    user: {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      attendee: {
        id: uuid,
        nickname: nickname,
        name: name,
        course_id: course,
      },
    },
  });

  return response.data;
}

/*
  The courses returned by this API call are already ordered in the way 
  they should be displayed on all course listings, and the first entry 
  in the array represents the default value for a course.
*/
export async function getCourses() {
  const response = await API.get("/api/attendee/courses");

  return response.data;
}

export async function getLeaderboard(date) {
  const response = await API.get(`/api/leaderboard/${date}`);

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
  const response = await API.get(`/api/store/redeem/${uuid}`);

  return response.data;
}

export async function redeem(attendee, prize, amount) {
  const response = await API.post("/api/store/redeem", {
    redeem: {
      attendee_id: attendee,
      redeemable: prize,
      quantity: amount,
    },
  });

  return response.data;
}

export async function redeemWheel(attendee, prize, amount) {
  const response = await API.post("/api/roulette/redeem", {
    redeem: {
      attendee_id: attendee,
      prize: prize,
      quantity: amount,
    },
  });

  return response.data;
}

export async function redeemBadge(uuid, selectedBadge) {
  const response = await API.post("/api/redeems", {
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

export async function resetPassword(email) {
  const response = await API.post("/api/auth/passwords", {
    user: {
      email: email,
    },
  });

  return response.data;
}

export async function resetPasswordWithToken({ token, password }) {
  const user = { password };
  const response = await API.put(`/api/auth/passwords/${token}`, {
    user,
  });

  return response.data;
}

export async function sendResetEmail({ email }) {
  const user = { email };
  const response = await API.post("/api/auth/passwords", {
    user,
  });

  return response.data;
}

export async function getAttendeeByID(id) {
  const response = await API.get(`/api/attendee`, {
    params: {
      id,
    },
  });

  return response.data;
}

export async function getAttendeeByUsername(username) {
  const response = await API.get(`/api/attendee`, {
    params: {
      username,
    },
  });

  return response.data;
}

export async function getWheelPrizes() {
  const response = await API.get("/api/roulette/prizes");

  return response.data;
}

export async function getWheelPrice() {
  const response = await API.get("/api/roulette/price");

  return response.data;
}

export async function getWheelRedeemables(uuid) {
  const response = await API.get(`/api/roulette/redeem/${uuid}`);

  return response.data;
}

export async function getAllBadges() {
  const response = await API.get("/api/badges");

  return response.data;
}

export async function getWheelLatestWins() {
  const response = await API.get("/api/roulette/latestwins");

  return response.data;
}

export async function spinWheel() {
  const response = await API.post("/api/roulette");

  return response.data;
}

export async function referral(id) {
  const response = await API.post("/api/referrals", {
    id: id,
  });

  return response.data;
}

export async function isAttendeeRegistered(id) {
  const response = await API.get(`/api/is_registered/${id}`);

  return response;
}

export async function getCurrentUser() {
  const response = await API.get("/api/user");
  return response.data;
}

export async function getBadge(id) {
  const response = await API.get(`/api/badges/${id}`);

  return response;
}

export async function testEdit(id, formData) {
  const response = await API.patch(`/api/attendees/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export async function editUser(id, formData) {
  const response = await API.patch(`/api/attendees/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export async function giveBadge(attendee_id, badge_id) {
  const response = await API.post("/api/redeems", {
    redeem: {
      attendee_id,
      badge_id,
    },
  });

  return response.data;
}

export async function getProducts() {
  const response = await API.get("/api/store");

  return response.data;
}

export async function getProduct(id) {
  const response = await API.get(`/api/store/${id}`);

  return response;
}

export async function buyProduct(id) {
  const response = await API.post(`/api/store/buy/`, {
    redeemable: { redeemable_id: id },
  });
  return response.data;
}

export async function getCompanyVisitors(id) {
  const response = await API.get(`/api/company/attendees/${id}`);

  return response.data;
}

export async function uploadStaffCV(id, formData) {
  const response = await API.patch(`/api/staff/cv/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export async function getStaffCV(id) {
  const response = await API.get(`/api/staff/cv/${id}`);

  return response.data;
}

export async function downloadCVInBulk(id) {
  const response = await API.get(`/api/company/attendees/cvs/${id}`, {
    responseType: "blob",
  });

  return response.data;
}

export async function getCompaniesWithSpotlightInfo() {
  const response = await API.get("/api/spotlights");
  return response.data;
}

export async function getCurrentSpotlight() {
  const response = await API.get("/api/spotlight");
  return response.data;
}

export async function createSpotlight(company_id) {
  const response = await API.post(`/api/spotlight/${company_id}`);
  return response.data;
}

export async function spinSlots(bet) {
  const response = await API.post("/api/slots", {
    bet: bet,
  });

  return response.data;
}

export default API;
