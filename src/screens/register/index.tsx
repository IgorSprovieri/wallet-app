import { MainContainer } from "./styled";
import { Background } from "../../components/atoms";
import { RegisterForm } from "../../components/organisms";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <MainContainer>
        <RegisterForm navigation={navigation} />
      </MainContainer>
    </Background>
  );
};
