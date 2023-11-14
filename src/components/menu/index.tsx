import { AddImage, CategoriesImage, HomeImage, TransferImage } from "../images";
import { MainContainer } from "./styled";

export const Menu = () => {
  return (
    <MainContainer>
      <HomeImage />
      <TransferImage />
      <CategoriesImage />
      <AddImage />
    </MainContainer>
  );
};
