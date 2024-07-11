import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginTemplate, RegisterTemplate } from "../components/templates";
import { HomeTabRouter } from "./HomeTabRouter";
import { SplashScreen } from "./_SplashScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Router: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginTemplate} />
      <Stack.Screen name="Register" component={RegisterTemplate} />
      <Stack.Screen name="Home" component={HomeTabRouter} />
    </Stack.Navigator>
  );
};
