import axios from "axios";
import qs from "qs";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export const registerUser = async (data: { name: string; email: string }) => {
  return await axios.post(`${baseUrl}/user`, data);
};

export const loginUser = async (data: { email: string }) => {
  const queryString = qs.stringify(data);

  return await axios.get(`${baseUrl}/user?${queryString}`);
};
