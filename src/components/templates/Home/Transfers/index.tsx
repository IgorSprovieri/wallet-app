import { TransferCard } from "@/components/molecules";
import { MainContainer } from "./styled";
import { icons } from "@/theme/icons";
import { AppIconNames } from "@/theme/types";

export const TransfersTab = () => {
  const a = icons[AppIconNames.AcademicCap];

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
