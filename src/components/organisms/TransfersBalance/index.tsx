import { formatMoney } from "@/utils/currency";
import { Label, MainContainer, ValueText } from "./styled";

export const TransfersBalance: React.FC = () => {
  const value = 2789.32;

  return (
    <MainContainer>
      <Label>Saldo Mensal</Label>
      <ValueText>{formatMoney(value)}</ValueText>
    </MainContainer>
  );
};
