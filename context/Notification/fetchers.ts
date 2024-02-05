import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

API.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzYWZpcmEiLCJleHAiOjE3MDk1MDg2MjQsImlhdCI6MTcwNzA4OTQyNCwiaXNzIjoic2FmaXJhIiwianRpIjoiZWYxNmY1YTYtMjZhYS00MzdmLTk3YjktZGRkODU4M2E2NzcyIiwibmJmIjoxNzA3MDg5NDIzLCJzdWIiOiIxIiwidHlwIjoiYWNjZXNzIn0.mE5u-eb8OjnzjPAc7gViOLUP3p7NLTmXxFEeHAVh8PlSS2hmZ-WMMEhDptEiv8z6qrw92Y3lulfFSp2fLmq28g";

type Fetcher<T> = {
  fetch: () => Promise<T>;
  interval: number;
  initialValue: T;
};

//Change here to add/remove notifications
export type NotificationData = {
  spotlight: ISpotlight;
};

type Fetchers = {
  spotlight: Fetcher<ISpotlight>;
};

//Adjust here the fetch function and fetch interval for each notification
//The initial value refers to the client side initial value
export const fetchers: Fetchers = {
  spotlight: {
    fetch: fetchSpotlight,
    interval: 10000,
    initialValue: null,
  },
};

export interface ISpotlight {
  id: number;
  name: string;
  badge_id: number;
  end: string;
}

async function fetchSpotlight() {
  try {
    return (await API.get("/api/spotlight")).data;
  } catch (e) {
    if (e.response.status === 404) {
      return null;
    } else {
      throw e;
    }
  }
}
