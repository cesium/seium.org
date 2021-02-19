import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_SAFIRA_ENDPOINT}`,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
