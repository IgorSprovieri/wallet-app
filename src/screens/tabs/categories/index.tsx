import { AddCategory, CategoryCard } from "../../../components";
import { CategoryAddCard, MainContainer, CategoryAddCardText } from "./styled";
const icons = require("../../../libs/icons/index.json");

export const CategoriesTab = () => {
  const a = require(`../../../../${"assets/icons/academic-cap-svgrepo-com.png"}`);

  return (
    <>
      <AddCategory source={a} />
      <MainContainer>
        <CategoryAddCard>
          <CategoryAddCardText>+</CategoryAddCardText>
        </CategoryAddCard>
        <CategoryCard source={a} />
        <CategoryCard source={a} />
        <CategoryCard source={a} />
        <CategoryCard source={a} />
      </MainContainer>
    </>
  );
};
