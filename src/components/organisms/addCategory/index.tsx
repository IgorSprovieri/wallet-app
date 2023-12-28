import { ImageSourcePropType } from "react-native";
import {
  Circle,
  Image,
  MainContainer,
  TextInput,
  TouchableOpacity,
} from "./styled";
import { AddImage } from "../../atoms";

type Props = {
  color?: string | undefined;
  source: ImageSourcePropType;
};

export const AddCategory: React.FC<Props> = ({ color, source }) => {
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
