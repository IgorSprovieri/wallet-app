import { ImageSourcePropType } from "react-native";
import {
  LeftContainer,
  MainContainer,
  Money,
  Text,
  Circle,
  Image,
} from "./styled";
import { formatMoney } from "../../libs/currency";

type Props = {
  source: ImageSourcePropType;
  color?: string;
  name: string;
  value: number;
};

export const ResumeCard = ({ source, color, name, value }: Props) => {
  return (
    <MainContainer>
      <LeftContainer>
        <Circle color={color}>
          <Image source={source} />
        </Circle>
        <Text>{name}</Text>
      </LeftContainer>
      <Money value={value}>{formatMoney(value)}</Money>
    </MainContainer>
  );
};
