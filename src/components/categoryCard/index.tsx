import { ImageSourcePropType } from "react-native";
import { Circle, Image, MainContainer, Text } from "./styled";
import { AddImage } from "../images";

type Props = {
  color?: string | undefined;
  source: ImageSourcePropType;
};

export const CategoryCard = ({ color, source }: Props) => {
  return (
    <MainContainer>
      <Circle color={color}>
        <Image source={source} />
      </Circle>
      <Text>Categoria</Text>
    </MainContainer>
  );
};
