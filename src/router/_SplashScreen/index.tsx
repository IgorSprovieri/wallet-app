import { UserContext } from "@/services/UserContext";
import { storage } from "@/services/storage";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { number, object, string } from "yup";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type UseNavigation = NativeStackNavigationProp<RootStackParamList>;

export const SplashScreen: React.FC = () => {
  const navigation = useNavigation<UseNavigation>();

  const { setUser } = useContext(UserContext);

  const onStart = async () => {
    try {
      const user = await storage.getUser();

      const schema = object({
        user_id: number().required(),
        email: string().email().required(),
        name: string().required(),
      });

      await schema.validate(user);

      setUser(user);

      navigation.navigate("Home");
    } catch (error) {
      navigation.navigate("Login");
    }
  };

  useEffect(() => {
    onStart();
  }, []);

  return <></>;
};
