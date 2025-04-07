import { ECookies } from "@/consts/cookies";
import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";

export const mainApi = axios.create({
  baseURL: process.env.mainServerBaseUrl,
});

mainApi.interceptors.request.use(async (config) => {
  const accessToken = getCookie("access_token");

  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

mainApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      deleteCookie(ECookies.ACCESS_TOKEN);

      if (window) {
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);
