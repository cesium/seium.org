import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

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
    return (await API.get("/api/spotlight")).data.data;
  } catch (e) {
    if (e.response.status === 404) {
      return null;
    } else {
      throw e;
    }
  }
}
