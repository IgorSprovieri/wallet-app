import { StatusBar, Background } from "./components";
import { LoginScreen } from "./screens";

export const Router = () => {
  return (
    <>
      <StatusBar />
      <Background>
        <LoginScreen />
      </Background>
    </>
  );
};
