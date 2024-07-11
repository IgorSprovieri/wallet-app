import { storage } from "@/services/storage";
import axios from "axios";

export const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAuthApi = async () => {
  const user = await storage.getUser();

  return axios.create({
    baseURL: baseUrl,
    headers: {
      email: user.email,
      "Content-Type": "application/json",
    },
  });
};
