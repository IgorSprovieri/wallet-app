import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBarHeight } from "./styled";

export const StatusBar = () => {
  return (
    <>
      <StatusBarHeight />
      <ExpoStatusBar style="light" />
    </>
  );
};
