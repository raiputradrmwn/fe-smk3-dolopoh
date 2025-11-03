import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL;
const timeout = Number(process.env.NEXT_PUBLIC_API_TIMEOUT );

export const api = axios.create({
  baseURL,
  timeout,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);
