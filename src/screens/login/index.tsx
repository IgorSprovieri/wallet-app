const loginImage = require("../../../assets/login.png");
import { useEffect } from "react";
import { Background, Button, Input } from "../../components";
import { ContentContainer, LoginTitle, MainContainer } from "./styled";
import { NativeStackNavigationHelpers } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Alert, View } from "react-native";
import { number, object, string } from "yup";
import { useMutation } from "react-query";
import { AxiosResponse } from "axios";
import { User } from "../../types/user";
import { storage } from "../../services/storage";
import { useFormik } from "formik";
import { loginUser } from "../../services/api";

type Props = {
  navigation: NativeStackNavigationHelpers;
};

export const LoginScreen = ({ navigation }: Props) => {
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

  const schema = object({
    email: string().email().required(),
  });

  const { mutate, isLoading } = useMutation(loginUser, {
    onError: () => {
      Alert.alert("Usuário Não Existe");
    },
    onSuccess: async ({ data }: AxiosResponse<User>) => {
      await storage.saveUser(data);
      navigation.navigate("Home");
    },
  });

  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: { email: "" },
    validationSchema: schema,
    onSubmit: (data) => {
      mutate(data);
    },
  });

  return (
    <Background>
      <MainContainer>
        <ContentContainer>
          <LoginTitle source={loginImage} />
          <Input
            value={values.email}
            onChangeText={(value) => setFieldValue("email", value)}
            label="Email"
            err={errors.email}
          />
          <View>
            <Button onPress={handleSubmit} variant="solid">
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
        </ContentContainer>
      </MainContainer>
    </Background>
  );
};
