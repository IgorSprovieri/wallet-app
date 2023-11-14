import { Background, Balance, Header } from "../../components";
import { MainContainer } from "./styled";

export const HomeScreen = () => {
  return (
    <Background>
      <MainContainer>
        <Header name="Igor Sprovieri" />
        <Balance value={2226.73} />
      </MainContainer>
    </Background>
  );
};
