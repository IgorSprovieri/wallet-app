import { TouchableOpacity } from "react-native";
import { AddImage, CategoriesImage, HomeImage, TransferImage } from "../images";
import { MainContainer } from "./styled";
import { SetTab } from "../../context";

export const Menu = ({ setTab }: { setTab: SetTab }) => {
  return (
    <MainContainer>
      <TouchableOpacity onPress={() => setTab("Resume")}>
        <HomeImage />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTab("Transfers")}>
        <TransferImage />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTab("Categories")}>
        <CategoriesImage />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <AddImage />
      </TouchableOpacity>
    </MainContainer>
  );
};
