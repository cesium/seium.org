import { API } from "../api";

export async function isAttendeeRegistered(id: string) {
  const response = await API.get(`/api/v1/is_registered/${id}`);

  return response;
}

export async function getAttendee(id: string) {
  const response = await API.get(`/api/v1/attendees/${id}`);

  return response.data;
}

export async function editUser(id: string, nickname: string) {
  const response = await API.patch(`/api/v1/attendees/${id}`, {
    attendee: {
      nickname: nickname,
    },
  });

  return response.data;
}

export function getFirstName(fullName: string) {
  const names = fullName.split(" ");

  if (names.length > 0) {
    return names[0];
  }

  return "";
}

export async function getLeaderboard(date: string) {
  const response = await API.get(`/api/v1/leaderboard/${date}`);

  return response.data;
}
