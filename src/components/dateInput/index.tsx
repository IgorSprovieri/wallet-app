import { dateFormat } from "../../libs/dateFormat";
import { Text, TouchableOpacity } from "./styled";

type Props = {
  date: Date;
};

export const DateInput = ({ date }: Props) => {
  return (
    <TouchableOpacity>
      <Text>{dateFormat(date)}</Text>
    </TouchableOpacity>
  );
};
