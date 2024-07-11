import { MainContainer } from "./styled";
import { Background } from "../../atoms";
import { RegisterForm } from "../../organisms";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export const RegisterTemplate: React.FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <MainContainer>
        <RegisterForm navigation={navigation} />
      </MainContainer>
    </Background>
  );
};
