import { AddCategory, ListCategories } from "../../organisms";
import { ScrollView } from "./styled";
import { icons } from "../../../libs/icons";
import type { Category } from "../../../types";

type Props = {
  categories: Array<Category>;
};

export const CategoriesTab: React.FC<Props> = ({ categories }) => {
  return (
    <>
      <AddCategory source={icons["more-horizontal"]} />
      <ScrollView>
        <ListCategories categories={categories} />
      </ScrollView>
    </>
  );
};
