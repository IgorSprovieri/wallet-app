import axios from "axios";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export const registerUser = async (data: any) => {
  return await axios.post(`${baseUrl}/user`, data);
};
