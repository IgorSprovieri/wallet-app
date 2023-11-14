import { ImageSourcePropType } from "react-native";
import {
  Circle,
  Image,
  MainContainer,
  TextInput,
  TouchableOpacity,
} from "./styled";
import { AddImage } from "../images";

type Props = {
  color?: string | undefined;
  source: ImageSourcePropType;
};

export const AddCategory = ({ color, source }: Props) => {
  return (
    <MainContainer>
      <Circle color={color}>
        <Image source={source} />
      </Circle>
      <TextInput placeholder="Categoria" />
      <TouchableOpacity>
        <AddImage />
      </TouchableOpacity>
    </MainContainer>
  );
};
