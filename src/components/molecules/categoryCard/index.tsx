import { ImageSourcePropType } from "react-native";
import { Circle, Image, MainContainer, Text } from "./styled";

type Props = {
  color?: string | undefined;
  source: ImageSourcePropType;
  name: string;
  mr?: number;
  ml?: number;
};

export const CategoryCard: React.FC<Props> = (props) => {
  const { color, source, name, mr, ml } = props;

  return (
    <MainContainer mr={mr} ml={ml}>
      <Circle color={color}>
        <Image source={source} />
      </Circle>
      <Text>{name}</Text>
    </MainContainer>
  );
};
