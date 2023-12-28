import { useEffect } from "react";
import { MainContainer } from "./styled";
import { number, object, string } from "yup";
import { storage } from "../../libs/storage";
import { Background } from "../../components/atoms";
import { LoginForm } from "../../components/organisms";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const onStart = async () => {
    try {
      const user = await storage.getUser();

      const schema = object({
        user_id: number().required(),
        email: string().email().required(),
        name: string().required(),
      });

      await schema.validate(user);

      navigation.navigate("Home");
    } catch (error) {}
  };

  useEffect(() => {
    onStart();
  }, []);

  return (
    <Background>
      <MainContainer>
        <LoginForm navigation={navigation} />
      </MainContainer>
    </Background>
  );
};
