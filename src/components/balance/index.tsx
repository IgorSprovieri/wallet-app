import { formatMoney } from "../../libs/currency";
import { Label, MainContainer, ValueText } from "./styled";

export const Balance = ({ value }: { value: number }) => {
  return (
    <MainContainer>
      <Label>Saldo Mensal</Label>
      <ValueText>{formatMoney(value)}</ValueText>
    </MainContainer>
  );
};
