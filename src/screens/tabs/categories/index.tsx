import { AddCategory, CategoryCard } from "../../../components";
import { CategoryAddCard, MainContainer, CategoryAddCardText } from "./styled";
import { icons } from "../../../libs/icons";
import { useContext } from "react";
import { MainContext } from "../../../context";

export const CategoriesTab = () => {
  const { categories } = useContext(MainContext);

  return (
    <>
      <AddCategory source={icons["more-horizontal"]} />
      <MainContainer>
        <CategoryAddCard>
          <CategoryAddCardText>+</CategoryAddCardText>
        </CategoryAddCard>
        {categories.map((category) => {
          const { color, icon_url, name } = category;

          const source = icons[icon_url]
            ? icons[icon_url]
            : icons["more-horizontal"];

          return (
            <CategoryCard
              key={name}
              name={name}
              source={source}
              color={color}
            />
          );
        })}
      </MainContainer>
    </>
  );
};
