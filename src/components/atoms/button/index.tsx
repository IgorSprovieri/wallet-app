import { ReactNode } from "react";
import { Text, TouchableOpacity } from "./styled";
import { ActivityIndicator } from "react-native";
import type { ButtonVariant } from "./styled";

type Props = {
  children: ReactNode;
  variant: ButtonVariant;
  onPress: () => any;
  mt?: number;
  isLoading?: boolean;
  h?: number;
  w?: number;
};

export const Button: React.FC<Props> = (props) => {
  const { children, variant, onPress, mt, isLoading, h, w } = props;

  return (
    <TouchableOpacity
      mt={mt}
      h={h}
      w={w}
      onPress={() => {
        console.log("clicked");
        onPress();
      }}
      variant={variant}
    >
      {isLoading === true ? (
        <ActivityIndicator />
      ) : (
        <Text variant={variant}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};
