import * as SplashScreen from "expo-splash-screen";

import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme/theme";
import { Router } from "./src/router/index";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "./src/components/atoms";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { Theme } from "./src/theme/types";
import { UserContextProvider } from "@/services/UserContext/Provider";

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
            <UserContextProvider>
              <StatusBar />
              <MainContainer>
                <Router />
              </MainContainer>
            </UserContextProvider>
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
