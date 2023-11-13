import { MainContainer, Text, TextInput } from "./styled";

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
};

export const Input = ({ label, value, onChangeText }: Props) => {
  return (
    <MainContainer>
      <Text>{label}</Text>
      <TextInput
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
      />
    </MainContainer>
  );
};
