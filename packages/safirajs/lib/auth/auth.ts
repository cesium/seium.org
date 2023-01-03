import { API } from "../api";
import * as USER from "../roles";

export async function sign_up({
  email,
  password,
  password_confirmation,
  name,
  nickname,
  uuid,
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
      },
    },
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
      case USER.ROLES.SPONSOR:
        const { data: company } = await API.get("/api/v1/company");

        return { ...company, user_id: response.data.id, type };
      default:
        throw new Error(`Unknown USER TYPE: ${type}`);
    }
  }

  return response.data;
}
