import { useState } from "react";
import { Button, Input } from "../../components";
import {
  ButtonsContainer,
  ContentContainer,
  LoginTitle,
  MainContainer,
} from "./styled";
const loginImage = require("../../../assets/login.png");

export const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <MainContainer>
      <ContentContainer>
        <LoginTitle source={loginImage} />
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          label="Email"
        />
        <ButtonsContainer>
          <Button onPress={() => {}} variant="solid">
            Entrar
          </Button>
          <Button mt={12} onPress={() => {}} variant="ghost">
            Criar Conta
          </Button>
        </ButtonsContainer>
      </ContentContainer>
    </MainContainer>
  );
};
