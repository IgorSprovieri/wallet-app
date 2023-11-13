import { Background, Button, Input } from "../../components";
import { ContentContainer, RegisterTitle, MainContainer } from "./styled";
import { View } from "react-native";
import { NativeStackNavigationHelpers } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useMutation } from "react-query";
import { registerUser } from "../../services/api";
const registerImage = require("../../../assets/register.png");

type Props = {
  navigation: NativeStackNavigationHelpers;
};

export const RegisterScreen = ({ navigation }: Props) => {
  const schema = object({
    name: string().required(),
    email: string().email().required(),
  });

  const { mutate, isLoading } = useMutation(registerUser, {
    onError: (err) => {
      console.log(err);
    },
    onSuccess({ data }) {
      console.log(data);
    },
  });

  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema: schema,
    onSubmit: (data) => {
      mutate(data);
    },
  });

  return (
    <Background>
      <MainContainer>
        <ContentContainer>
          <RegisterTitle source={registerImage} />
          <View>
            <Input
              value={values.name}
              onChangeText={(value) => setFieldValue("name", value)}
              label="Nome"
              err={errors.name}
            />
            <Input
              mt={16}
              value={values.email}
              onChangeText={(value) => setFieldValue("email", value)}
              label="Email"
              err={errors.email}
            />
          </View>

          <View>
            <Button
              onPress={handleSubmit}
              variant="solid"
              isLoading={isLoading}
            >
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
