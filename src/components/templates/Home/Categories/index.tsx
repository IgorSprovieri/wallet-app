import { AddCategory, ListCategories } from "@/components/organisms";
import { ScrollView } from "./styled";

export const CategoriesTab: React.FC = () => {
  return (
    <>
      <AddCategory />
      <ScrollView>
        <ListCategories />
      </ScrollView>
    </>
  );
};
