import { useState } from "react";
import { Background, DateInput } from "../../components/atoms";
import { Balance, Header, Menu } from "../../components/molecules";
import {
  MainContainer,
  ContentContainer,
  HeaderContainer,
  Title,
} from "./styled";
import {
  ResumeTab,
  TransfersTab,
  CategoriesTab,
} from "../../components/templates";
import { getCategories } from "../../libs/api";
import { useQuery } from "react-query";
import { Tab } from "../../types";

type Props = {
  navigation: any;
};

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [tab, setTab] = useState<Tab>("Resume");

  const { data: categories } = useQuery(["categories"], getCategories, {
    onError: () => navigation.navigate("Login"),
  });

  const titles = {
    Resume: "Resumo Mensal",
    Transfers: "Transações",
    Categories: "Categorias",
  };

  const tabs = {
    Resume: <ResumeTab />,
    Transfers: <TransfersTab />,
    Categories: <CategoriesTab categories={categories} />,
  };

  return (
    <Background>
      <MainContainer>
        <Header name="Igor Sprovieri" />
        <Balance value={2226.73} />
        <Menu setTab={setTab} />
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
