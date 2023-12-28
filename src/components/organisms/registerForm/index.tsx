import { MainContainer } from "./styled";
import { Alert, View } from "react-native";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useMutation } from "react-query";
import { AxiosResponse } from "axios";
import { registerUser } from "../../../libs/api";
import type { User } from "../../../types";
import { storage } from "../../../libs/storage";
import { Button, Input, RegisterTitleImage } from "../../atoms";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export const RegisterForm: React.FC<Props> = ({ navigation }) => {
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
    <MainContainer>
      <RegisterTitleImage />
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
        <Button onPress={handleSubmit} variant="solid" isLoading={isLoading}>
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
    </MainContainer>
  );
};
