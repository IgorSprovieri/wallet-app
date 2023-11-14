import { ImageSourcePropType } from "react-native";
import { Circle, Image, MainContainer, Text } from "./styled";

type Props = {
  color?: string | undefined;
  source: ImageSourcePropType;
  name: string;
};

export const CategoryCard = ({ color, source, name }: Props) => {
  return (
    <MainContainer>
      <Circle color={color}>
        <Image source={source} />
      </Circle>
      <Text>{name}</Text>
    </MainContainer>
  );
};
