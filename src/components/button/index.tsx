import { ReactNode } from "react";
import { Text, TouchableOpacity, ButtonVariant } from "./styled";
import { ActivityIndicator } from "react-native";

type Props = {
  children: ReactNode;
  variant: ButtonVariant;
  onPress: () => any;
  mt?: number;
  isLoading?: boolean;
  h?: number;
  w?: number;
};

export const Button = (props: Props) => {
  const { children, variant, onPress, mt, isLoading, h, w } = props;

  return (
    <TouchableOpacity mt={mt} h={h} w={w} onPress={onPress} variant={variant}>
      {isLoading === true ? (
        <ActivityIndicator />
      ) : (
        <Text variant={variant}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};
