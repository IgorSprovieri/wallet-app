import { NotifyImage, ProfileImage } from "../../atoms/images";
import { MainContainer, NameText } from "./styled";

const profileImage = require("../../../../assets/profile.png");
const notifyImage = require("../../../../assets/notify.png");

type Props = { name: string };

export const Header: React.FC<Props> = ({ name }) => {
  return (
    <MainContainer>
      <ProfileImage source={profileImage} />
      <NameText>{name}</NameText>
      <NotifyImage source={notifyImage} />
    </MainContainer>
  );
};
