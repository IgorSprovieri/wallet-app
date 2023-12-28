import { FlatList, View } from "react-native";
import { icons } from "../../../libs/icons";
import type { Category } from "../../../types";
import { CategoryCard } from "../../molecules";
import { ItemSeparator, MainContainer } from "./styled";

type Props = {
  categories: Array<Category>;
};

export const ListCategories: React.FC<Props> = ({ categories }) => {
  return (
    <MainContainer>
      <FlatList
        data={categories}
        renderItem={({ item, index }: { item: Category; index: number }) => {
          const { color, icon_url, name } = item;

          const source = icons[icon_url]
            ? icons[icon_url]
            : icons["more-horizontal"];

          return (
            <CategoryCard
              ml={index % 3 === 0 ? 0 : 8}
              name={name}
              source={source}
              color={color}
            />
          );
        }}
        keyExtractor={(item) => item.name}
        numColumns={3}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </MainContainer>
  );
};
