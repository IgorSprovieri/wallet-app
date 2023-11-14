import { ResumeCard, TransferCard } from "../../../components";
import { MainContainer } from "./styled";
const icons = require("../../../libs/icons/index.json");

export const TransfersTab = () => {
  const a = require(`../../../../${"assets/icons/academic-cap-svgrepo-com.png"}`);

  return (
    <MainContainer>
      <TransferCard
        source={a}
        title="Mercado"
        value={-354.37}
        date={new Date()}
      />
      <TransferCard source={a} title="Salário" value={2000} date={new Date()} />
      <TransferCard
        source={a}
        title="Mercado"
        value={-354.37}
        date={new Date()}
      />
      <TransferCard
        source={a}
        title="Mercado"
        value={-354.37}
        date={new Date()}
      />
    </MainContainer>
  );
};
