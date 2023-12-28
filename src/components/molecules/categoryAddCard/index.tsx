import { GestureResponderEvent } from "react-native";
import { TouchableOpacity, Text } from "./styled";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

export const CategoryAddCard: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>+</Text>
    </TouchableOpacity>
  );
};
