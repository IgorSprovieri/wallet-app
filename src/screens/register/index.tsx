import { Background, Button, Input, RegisterTitle } from "../../components";
import { ContentContainer, MainContainer } from "./styled";
import { Alert, View } from "react-native";
import { NativeStackNavigationHelpers } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useMutation } from "react-query";
import { registerUser } from "../../libs/api";
import { storage } from "../../libs/storage";
import { AxiosResponse } from "axios";
import { User } from "../../types/user";

type Props = {
  navigation: NativeStackNavigationHelpers;
};

export const RegisterScreen = ({ navigation }: Props) => {
  const schema = object({
    name: string().required(),
    email: string().email().required(),
  });

  const { mutate, isLoading } = useMutation(registerUser, {
    onError: () => {
      Alert.alert("Usuário Já Existe");
    },
    onSuccess: async ({ data }: AxiosResponse<User>) => {
      await storage.saveUser(data);
      navigation.navigate("Home");
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
          <RegisterTitle />
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
