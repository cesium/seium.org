import axios from "axios";

var state = {
  jwt: "",
  user: null,
  type: null,
  subscriptions: [],
};

export async function getId() {
  await this.fetchUser();
  return state.user.id;
}

export async function getEmail() {
  await this.fetchUser();
  return state.user.email;
}

export async function getNickname() {
  await this.fetchUser();
  return state.user.nickname;
}

export async function getAvatar() {
  await this.fetchUser();
  return state.user.avatar;
}

export async function getUser() {
  await this.fetchUser();
  return state.user;
}

export async function getType() {
  await this.fetchUser();
  return state.type;
}

export async function fetchUser() {
  if (state.user === null || localStorage.getItem("jwt") !== state.jwt)
    await this.fetchUserForce();
}

export async function fetchUserForce() {
  state.jwt = localStorage.getItem("jwt");
  const auth = {
    headers: {
      Authorization: "Bearer " + state.jwt,
    },
  };
  const api_endpoint_type =
    process.env.SAFIRA_ENDPOINT + process.env.API_USER_INFO;
  const type = await axios.get(api_endpoint_type, auth);
  state.type = type.data.type;

  if (state.type === "attendee") {
    const api_endpoint_attendee =
      process.env.SAFIRA_ENDPOINT + process.env.API_ATTENDEE;
    const user = await axios.get(api_endpoint_attendee, auth);
    state.user = user.data;
  } else if (state.type === "company") {
    state.user = {};
  } else {
    localStorage.removeItem("jwt");
    window.location.pathname = "/login";
  }
  state.subscriptions.forEach((f) => f());
}

export function subscribeToStateChange(func) {
  state.subscriptions.push(func);
}
