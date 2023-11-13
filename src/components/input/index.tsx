import { MainContainer, Text, TextInput } from "./styled";

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  mt?: number;
  err?: string | undefined;
};

export const Input = ({ label, value, onChangeText, mt, err }: Props) => {
  return (
    <MainContainer mt={mt || 0}>
      <Text>{label}</Text>
      <TextInput
        err={err}
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
      />
    </MainContainer>
  );
};
