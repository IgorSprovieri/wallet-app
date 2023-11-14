import { ImageSourcePropType, View } from "react-native";
import {
  Circle,
  Image,
  LeftContainer,
  MainContainer,
  Money,
  Text,
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
