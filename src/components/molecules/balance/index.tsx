import { formatMoney } from "../../../libs/currency";
import { Label, MainContainer, ValueText } from "./styled";

type Props = {
  value: number;
};

export const Balance: React.FC<Props> = ({ value }) => {
  return (
    <MainContainer>
      <Label>Saldo Mensal</Label>
      <ValueText>{formatMoney(value)}</ValueText>
    </MainContainer>
  );
};
