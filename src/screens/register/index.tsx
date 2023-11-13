import { useState } from "react";
import { Background, Button, Input } from "../../components";
import { ContentContainer, RegisterTitle, MainContainer } from "./styled";
import { View } from "react-native";
import { NativeStackNavigationHelpers } from "@react-navigation/native-stack/lib/typescript/src/types";
const registerImage = require("../../../assets/register.png");

type Props = {
  navigation: NativeStackNavigationHelpers;
};

export const RegisterScreen = ({ navigation }: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <Background>
      <MainContainer>
        <ContentContainer>
          <RegisterTitle source={registerImage} />
          <View>
            <Input
              value={name}
              onChangeText={(text) => setName(text)}
              label="Nome"
            />
            <Input
              mt={16}
              value={email}
              onChangeText={(text) => setEmail(text)}
              label="Email"
            />
          </View>

          <View>
            <Button onPress={() => {}} variant="solid">
              Cadastrar
            </Button>
            <Button
              mt={12}
              onPress={() => navigation.navigate("Login")}
              variant="ghost"
            >
              Fazer Login
            </Button>
          </View>
        </ContentContainer>
      </MainContainer>
    </Background>
  );
};
