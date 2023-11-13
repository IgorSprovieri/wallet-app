import { ReactNode } from "react";
import { Text, TouchableOpacity, ButtonVariant } from "./styled";
import { ActivityIndicator } from "react-native";

type Props = {
  children: ReactNode;
  variant: ButtonVariant;
  onPress: () => any;
  mt?: number;
  isLoading?: boolean;
};

export const Button = (props: Props) => {
  const { children, variant, onPress, mt, isLoading } = props;

  return (
    <TouchableOpacity mt={mt || 0} onPress={onPress} variant={variant}>
      {isLoading === true ? (
        <ActivityIndicator />
      ) : (
        <Text variant={variant}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};
