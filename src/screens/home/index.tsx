import { useContext } from "react";
import { Background, Balance, DateInput, Header, Menu } from "../../components";
import {
  MainContainer,
  ContentContainer,
  HeaderContainer,
  Title,
} from "./styled";
import { MainContext } from "../../context";
import { ResumeTab } from "../tabs";

const Tab = () => {
  const { tab } = useContext(MainContext);

  const tabs = {
    Resume: <ResumeTab />,
    Transfers: <></>,
    Categories: <></>,
  };

  return tabs[tab];
};

export const HomeScreen = () => {
  const { tab, setTab } = useContext(MainContext);

  const titles = {
    Resume: "Resumo Mensal",
    Transfers: "Transações",
    Categories: "Categorias",
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
          <Tab />
        </ContentContainer>
      </MainContainer>
    </Background>
  );
};
