import { NotifyImage, ProfileImage } from "@/components/atoms/images";
import { MainContainer, NameText } from "./styled";
import { useContext } from "react";
import { UserContext } from "@/services/UserContext";

export const HomeHeader: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <MainContainer>
      <ProfileImage />
      <NameText>{user.name}</NameText>
      <NotifyImage />
    </MainContainer>
  );
};
