import { ImageSourcePropType, View } from "react-native";
import {
  Circle,
  Date,
  Image,
  LeftContainer,
  MainContainer,
  Expensive,
  Title,
  Value,
  LeftContentContainer,
  RightContainer,
} from "./styled";
import { formatMoney } from "@/utils/currency";
import { fullDateFormat } from "@/utils/dateFormat";

type Props = {
  source: ImageSourcePropType;
  color?: string;
  title: string;
  value: number;
  date: Date;
};

export const TransferCard: React.FC<Props> = (props) => {
  const { source, color, title, value, date } = props;

  return (
    <MainContainer>
      <LeftContainer>
        <Circle color={color}>
          <Image source={source} />
        </Circle>
        <LeftContentContainer>
          <Title>{title}</Title>
          <Value>{formatMoney(value)}</Value>
        </LeftContentContainer>
      </LeftContainer>
      <RightContainer>
        <Date>{fullDateFormat(date)}</Date>
        <Expensive value={value}>{value > 0 ? "Receita" : "Despesa"}</Expensive>
      </RightContainer>
    </MainContainer>
  );
};
