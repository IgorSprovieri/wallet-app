import { ReactNode } from "react";
import { Text, TouchableOpacity, ButtonVariant } from "./styled";

type Props = {
  children: ReactNode;
  variant: ButtonVariant;
  onPress: () => any;
  mt?: number;
};

export const Button = ({ children, variant, onPress, mt }: Props) => {
  return (
    <TouchableOpacity mt={mt || 0} onPress={onPress} variant={variant}>
      <Text variant={variant}>{children}</Text>
    </TouchableOpacity>
  );
};
