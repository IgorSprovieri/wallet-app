import axios from "axios";
import qs from "qs";
import { Category } from "../../types";
import { storage } from "../storage";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export const registerUser = async (data: { name: string; email: string }) => {
  return await axios.post(`${baseUrl}/user`, data);
};

export const loginUser = async (data: { email: string }) => {
  const queryString = qs.stringify(data);

  return await axios.get(`${baseUrl}/user?${queryString}`);
};

export const getCategories = async (): Promise<Array<Category>> => {
  const user = await storage.getUser();

  const { data } = await axios.get(`${baseUrl}/categories`, {
    headers: { email: user.email },
  });

  return data;
};
