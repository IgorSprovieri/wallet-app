import { Alert, View } from "react-native";
import { Button, Input, LoginTitleImage } from "../../atoms";
import { MainContainer } from "./styled";
import { object, string } from "yup";
import { useMutation } from "react-query";
import { loginUser } from "../../../libs/api";
import type { AxiosResponse } from "axios";
import type { User } from "../../../types";
import { storage } from "../../../libs/storage";
import { useFormik } from "formik";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export const LoginForm: React.FC<Props> = ({ navigation }) => {
  const schema = object({
    email: string().email().required(),
  });

  const { mutate, isLoading } = useMutation(loginUser, {
    onError: () => Alert.alert("Usuário Não Existe"),
    onSuccess: async ({ data }: AxiosResponse<User>) => {
      await storage.saveUser(data);
      navigation.navigate("Home");
    },
  });

  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: { email: "" },
    validationSchema: schema,
    onSubmit: (data) => mutate(data),
  });

  return (
    <MainContainer>
      <LoginTitleImage />
      <Input
        value={values.email}
        onChangeText={(value) => setFieldValue("email", value)}
        label="Email"
        err={errors.email}
      />
      <View>
        <Button onPress={handleSubmit} variant="solid" isLoading={isLoading}>
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
    </MainContainer>
  );
};
