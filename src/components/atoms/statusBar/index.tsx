import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBarHeight } from "./styled";

export const StatusBar: React.FC = () => {
  return (
    <>
      <StatusBarHeight />
      <ExpoStatusBar style="light" />
    </>
  );
};
