import { MainContainer } from "./styled";
import { Alert, View } from "react-native";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/services/api";
import { storage } from "@/services/storage";
import { Button, Input, RegisterTitleImage } from "@/components/atoms";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { UserEntity } from "@/services/api/types";

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export const RegisterForm: React.FC<Props> = ({ navigation }) => {
  const schema = object({
    name: string().required(),
    email: string().email().required(),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onError: () => Alert.alert("Usuário Já Existe"),
    onSuccess: async (data: UserEntity) => {
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
        <Button onPress={handleSubmit} variant="solid" isLoading={isPending}>
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
