import { ReactNode } from "react";
import { MainContainer, Wave } from "./styled";

const waveImage = require("../../../../assets/wave.png");

type Props = { children: ReactNode };

export const Background: React.FC<Props> = ({ children }) => {
  return (
    <MainContainer>
      <Wave source={waveImage} />
      {children}
    </MainContainer>
  );
};
