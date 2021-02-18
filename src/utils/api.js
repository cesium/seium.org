import axios from "axios";

let APP_URL = "https://sei21-staging.herokuapp.com";

if (!/^https?:\/\//i.test(APP_URL)) {
  APP_URL = "http://" + APP_URL;
}

const API = axios.create({
  baseURL: `${APP_URL}`,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
