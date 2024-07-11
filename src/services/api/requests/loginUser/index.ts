import { UserEntity } from "../../types";
import { api } from "../../config";

export type LoginUserDto = { email: string };
export type LoginUser = Promise<UserEntity>;

export const loginUser = async ({ email }: LoginUserDto): LoginUser => {
  const { data } = await api(`/user`, {
    params: {
      email: email,
    },
  });

  return data;
};
