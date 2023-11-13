import { ReactNode } from "react";
import { MainContainer, Wave } from "./styled";
const waveImage = require("../../../assets/wave.png");

export const Background = ({ children }: { children: ReactNode }) => {
  return (
    <MainContainer>
      <Wave source={waveImage} />
      {children}
    </MainContainer>
  );
};
