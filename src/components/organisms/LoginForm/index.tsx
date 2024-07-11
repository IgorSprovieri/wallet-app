import { Alert, View } from "react-native";
import { Button, Input, LoginTitleImage } from "../../atoms";
import { MainContainer } from "./styled";
import { object, string } from "yup";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../../services/api";
import { storage } from "../../../services/storage";
import { useFormik } from "formik";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UserEntity } from "@/services/api/types";

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export const LoginForm: React.FC<Props> = ({ navigation }) => {
  const schema = object({
    email: string().email().required(),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onError: (err) => {
      Alert.alert("Usuário Não Existe");
    },
    onSuccess: async (data: UserEntity) => {
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
        <Button onPress={handleSubmit} variant="solid" isLoading={isPending}>
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
