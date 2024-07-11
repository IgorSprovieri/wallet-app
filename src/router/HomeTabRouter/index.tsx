import { ReactElement, useState } from "react";
import { Background, DateInput } from "@/components/atoms";
import { TransfersBalance, HomeHeader, HomeMenu } from "@/components/organisms";
import { ResumeTab, TransfersTab, CategoriesTab } from "@/components/templates";
import { HomeTabs } from "./types";

import {
  MainContainer,
  ContentContainer,
  HeaderContainer,
  Title,
} from "./styled";

export const HomeTabRouter: React.FC = () => {
  const [tab, setTab] = useState<HomeTabs>("Resume");

  const titles: { [key in HomeTabs]: string } = {
    Resume: "Resumo Mensal",
    Transfers: "Transações",
    Categories: "Categorias",
  };

  const tabs: { [key in HomeTabs]: ReactElement } = {
    Resume: <ResumeTab />,
    Transfers: <TransfersTab />,
    Categories: <CategoriesTab />,
  };

  return (
    <Background>
      <MainContainer>
        <HomeHeader />
        <TransfersBalance />
        <HomeMenu setTab={setTab} />
        <ContentContainer>
          <HeaderContainer>
            <Title>{titles[tab]}</Title>
            <DateInput date={new Date()} />
          </HeaderContainer>
          {tabs[tab]}
        </ContentContainer>
      </MainContainer>
    </Background>
  );
};
