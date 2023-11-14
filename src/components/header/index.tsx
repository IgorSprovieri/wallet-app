import { MainContainer, ProfileImage, NameText, NotifyImage } from "./styled";
const profileImage = require("../../../assets/profile.png");
const notifyImage = require("../../../assets/notify.png");

export const Header = ({ name }: { name: string }) => {
  return (
    <MainContainer>
      <ProfileImage source={profileImage} />
      <NameText>{name}</NameText>
      <NotifyImage source={notifyImage} />
    </MainContainer>
  );
};
