import React, { ReactNode } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { Text } from "./styles";

type Props = {
  Icon: React.FC;
  onPress?: (event: GestureResponderEvent) => void;
  children?: ReactNode;
};

export const IconButton: React.FC<Props> = ({ Icon, onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
      {children && <Text>{children}</Text>}
    </TouchableOpacity>
  );
};
