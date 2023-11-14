import { ThemeProvider } from "styled-components";
import { Theme, theme } from "./src/theme";
import { Provider } from "./src";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Background, StatusBar } from "./src/components";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components/native";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <View onLayout={onLayoutRootView}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <StatusBar />
            <MainContainer>
              <Provider />
            </MainContainer>
          </NavigationContainer>
        </QueryClientProvider>
      </View>
    </ThemeProvider>
  );
}

export const MainContainer = styled.View<{ theme: Theme }>`
  width: 100%;
  height: ${({ theme }) => theme.vh}px;
`;
