import { ResumeCard } from "../../../components";
import { MainContainer } from "./styled";
const icons = require("../../../libs/icons/index.json");

export const ResumeTab = () => {
  console.log(icons[0]);
  const a = require(`../../../../${"assets/icons/academic-cap-svgrepo-com.png"}`);

  return (
    <MainContainer>
      <ResumeCard source={a} name="Categoria" value={354.37} />
      <ResumeCard source={a} name="Categoria" value={-200.0} />
      <ResumeCard source={a} name="Categoria" value={-52.2} />
    </MainContainer>
  );
};
