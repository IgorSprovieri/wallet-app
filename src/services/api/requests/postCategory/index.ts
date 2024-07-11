import { getAuthApi } from "../../config";
import { CategoryEntity } from "../../types";

export type PostCategoryDto = Omit<CategoryEntity, "category_id">;
export type PostCategory = Promise<Array<CategoryEntity>>;

export const postCategory = async (dto: PostCategoryDto): PostCategory => {
  const authApi = await getAuthApi();

  const { data } = await authApi.post(`/category`, dto);

  return data;
};
