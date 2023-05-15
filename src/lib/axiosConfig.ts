import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://65.0.100.158",
  timeout: 5000,
});
