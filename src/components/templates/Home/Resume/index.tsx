import { ResumeCard } from "@/components/molecules";
import { MainContainer } from "./styled";
import { icons } from "@/theme/icons";
import { AppIconNames } from "@/theme/types";

export const ResumeTab: React.FC = () => {
  const a = icons[AppIconNames.AcademicCap];

  return (
    <MainContainer>
      <ResumeCard source={a} name="Categoria" value={354.37} />
      <ResumeCard source={a} name="Categoria" value={-200.0} />
      <ResumeCard source={a} name="Categoria" value={-52.2} />
    </MainContainer>
  );
};
