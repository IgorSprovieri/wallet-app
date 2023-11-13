import { useState } from "react";
import { Background, Button, Input } from "../../components";
import { ContentContainer, LoginTitle, MainContainer } from "./styled";
const loginImage = require("../../../assets/login.png");
import { NativeStackNavigationHelpers } from "@react-navigation/native-stack/lib/typescript/src/types";
import { View } from "react-native";

type Props = {
  navigation: NativeStackNavigationHelpers;
};

export const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("");

  return (
    <Background>
      <MainContainer>
        <ContentContainer>
          <LoginTitle source={loginImage} />
          <Input
            value={email}
            onChangeText={(text) => setEmail(text)}
            label="Email"
          />
          <View>
            <Button onPress={() => {}} variant="solid">
              Entrar
            </Button>
            <Button
              mt={12}
              onPress={() => navigation.navigate("Register")}
              variant="ghost"
            >
              Criar Conta
            </Button>
          </View>
        </ContentContainer>
      </MainContainer>
    </Background>
  );
};
