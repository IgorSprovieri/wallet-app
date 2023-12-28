import { dateFormat } from "../../../libs/dateFormat";
import { Text, TouchableOpacity } from "./styled";

type Props = {
  date: Date;
};

export const DateInput: React.FC<Props> = ({ date }) => {
  return (
    <TouchableOpacity>
      <Text>{dateFormat(date)}</Text>
    </TouchableOpacity>
  );
};
