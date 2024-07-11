import axios from "axios";
import { CategoryEntity } from "../../types";
import { storage } from "@/services/storage";
import { getAuthApi } from "../../config";

export type GetCategories = Promise<Array<CategoryEntity>>;

export const getCategories = async (): GetCategories => {
  const authApi = await getAuthApi();

  const { data } = await authApi(`/categories`);

  return data;
};
