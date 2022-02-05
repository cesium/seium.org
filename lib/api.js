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

export async function sign_up({ email, password, role }) {
  const response = await API.post("/api/auth/sign_up", {
    email,
    password,
    role,
  });

  return response.data;
}

export async function sign_in({ email, password }) {
  const response = await API.post("/api/auth/sign_in", {
    email,
    password,
  });

  return response.data;
}

export async function sign_out() {
  const response = await API.delete("/api/auth/sign_out");

  return response.data;
}

export async function getCurrentUser() {
  const response = await API.get("/api/v1/user");
  const { type } = response.data;

  if (type) {
    switch (type) {
      case USER.ROLES.ATTENDEE:
        const { data: attendee } = await API.get("/api/v1/attendee");

        return { ...attendee, type };
      default:
        throw new Error(`Unknown USER TYPE: ${type}`);
    }
  }

  return response.data;
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

export async function verify_email(token) {
  const response = await API.post("/api/auth/verify", { token: token });

  return response.data;
}

export async function resend_confirmation_email() {
  const response = await API.post("/api/auth/resend");

  return response.status;
}

export async function getGuardian(id) {
  const response = await API.get(`/api/guardians/${id}`);

  return response.data;
}

export async function getMentor(id) {
  const response = await API.get(`/api/mentors/${id}`);

  return response.data;
}

export async function getNinja(id) {
  const response = await API.get(`/api/ninjas/${id}`);

  return response.data;
}

export async function getNinjas() {
  const response = await API.get(`/api/ninjas/`);

  return response.data;
}

export async function getUserByType({ id, type }) {
  switch (type) {
    case USER.ROLES.GUARDIAN:
      return getGuardian(id);
    case USER.ROLES.MENTOR:
      return getMentor(id);
    case USER.ROLES.NINJA:
      return getNinja(id);
    default:
      throw new Error(`Unknown USER TYPE: ${type}`);
  }
}

export async function registerUser(values) {
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

      case "user[socials]":
        for (const social of values[key]) {
          data.append(`${key}[${social.name}][name]`, social.name);
          data.append(`${key}[${social.name}][username]`, social.username);
        }
        break;

      default:
        data.append(key, values[key]);
        break;
    }
  }

  const response = await API.post("/api/auth/me", data, { headers: undefined });

  return response.data;
}

export async function createNinja(values) {
  const data = new FormData();

  for (const key in values) {
    if (!values[key]) continue;

    switch (key) {
      case "ninja[photo]":
        data.append(key, values[key].file);
        break;

      case "ninja[birthday]":
        data.append(key, values[key].format("YYYY-MM-DD"));
        break;

      default:
        data.append(key, values[key]);
        break;
    }
  }

  const response = await API.post("/api/ninjas", data, { headers: undefined });

  return response.data;
}

export async function getNinjaBadges(ninja_id) {
  const response = await API.get(`/api/ninjas/${ninja_id}/badges`);

  return response.data;
}

export async function getNinjaFiles(ninja_id) {
  const response = await API.get(`/api/ninjas/${ninja_id}/files`);

  return response.data;
}

export async function getEvents() {
  const response = await API.get("/api/events");

  return response.data;
}

export async function getFiles() {
  const response = await API.get("/api/files");

  return response.data;
}

export async function createFile(values) {
  const data = new FormData();

  for (const key in values) {
    if (!values[key]) continue;

    if (key == "file[document]") {
      data.append(key, values[key].file);
    } else {
      data.append(key, values[key]);
    }
  }

  const response = await API.post("/api/files", data, {
    headers: undefined,
  });

  return response.data;
}

export async function editFile(id, data) {
  const response = await API.put(`/api/files/${id}`, { file: data });

  return response.data;
}

export default API;
