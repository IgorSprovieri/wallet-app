import {
  AddImage,
  CategoriesImage,
  HomeImage,
  TransferImage,
} from "../../atoms/images";
import { MainContainer } from "./styled";
import { Tab } from "../../../types";
import { Dispatch, SetStateAction } from "react";
import { IconButton } from "../../atoms";

type Props = {
  setTab: Dispatch<SetStateAction<Tab>>;
};

export const Menu: React.FC<Props> = ({ setTab }) => {
  return (
    <MainContainer>
      <IconButton Icon={HomeImage} onPress={() => setTab("Resume")} />
      <IconButton Icon={TransferImage} onPress={() => setTab("Transfers")} />
      <IconButton Icon={CategoriesImage} onPress={() => setTab("Categories")} />
      <IconButton Icon={AddImage} onPress={() => {}} />
    </MainContainer>
  );
};
