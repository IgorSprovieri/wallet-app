import { MainContainer, Text, TextInput } from "./styled";

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  mt?: number;
};

export const Input = ({ label, value, onChangeText, mt }: Props) => {
  return (
    <MainContainer mt={mt || 0}>
      <Text>{label}</Text>
      <TextInput
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
      />
    </MainContainer>
  );
};
