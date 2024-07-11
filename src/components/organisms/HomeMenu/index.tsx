import { MainContainer } from "./styled";
import { Dispatch, SetStateAction } from "react";
import { IconButton } from "@/components/atoms";

import {
  AddImage,
  CategoriesImage,
  HomeImage,
  TransferImage,
} from "@/components/atoms/images";
import { HomeTabs } from "@/router/HomeTabRouter/types";

type Props = {
  setTab: Dispatch<SetStateAction<HomeTabs>>;
};

export const HomeMenu: React.FC<Props> = ({ setTab }) => {
  return (
    <MainContainer>
      <IconButton Icon={HomeImage} onPress={() => setTab("Resume")} />
      <IconButton Icon={TransferImage} onPress={() => setTab("Transfers")} />
      <IconButton Icon={CategoriesImage} onPress={() => setTab("Categories")} />
      <IconButton Icon={AddImage} onPress={() => {}} />
    </MainContainer>
  );
};
