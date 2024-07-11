import { FlatList } from "react-native";
import { icons } from "../../../theme/icons";
import { CategoryCard } from "@/components/molecules";
import { ItemSeparator, MainContainer } from "./styled";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/api";
import { CategoryEntity } from "@/services/api/types";

type RenderItem = { item: CategoryEntity; index: number };

export const ListCategories: React.FC = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <MainContainer>
      <FlatList
        data={categories}
        renderItem={({ item, index }: RenderItem) => {
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
