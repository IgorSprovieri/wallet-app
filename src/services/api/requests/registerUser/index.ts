import { api } from "../../config";
import { UserEntity } from "../../types";

export type ResgisterUserDto = Omit<UserEntity, "user_id">;
export type RegisterUser = Promise<UserEntity>;

export const registerUser = async (dto: ResgisterUserDto): RegisterUser => {
  const { data } = await api.post(`/user`, dto);

  return data;
};
