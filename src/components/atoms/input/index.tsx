import { MainContainer, Text, TextInput } from "./styled";

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  mt?: number;
  err?: string | undefined;
};

export const Input: React.FC<Props> = (props) => {
  const { label, value, onChangeText, mt, err } = props;

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
