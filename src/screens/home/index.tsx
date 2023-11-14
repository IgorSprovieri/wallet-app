import { useContext } from "react";
import { Background, Balance, DateInput, Header, Menu } from "../../components";
import {
  MainContainer,
  ContentContainer,
  HeaderContainer,
  Title,
} from "./styled";
import { MainContext } from "../../context";
import { View } from "react-native";

const Tab = () => {
  const { tab } = useContext(MainContext);

  const tabs = {
    Resume: <></>,
    Transfers: <></>,
    Categories: <></>,
  };

  return tabs[tab];
};

export const HomeScreen = () => {
  return (
    <Background>
      <MainContainer>
        <Header name="Igor Sprovieri" />
        <Balance value={2226.73} />
        <Menu />
        <ContentContainer>
          <HeaderContainer>
            <Title>Resumo Mensal</Title>
            <DateInput date={new Date()} />
          </HeaderContainer>
          <Tab />
        </ContentContainer>
      </MainContainer>
    </Background>
  );
};
