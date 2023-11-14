import styled from "styled-components/native";
import { Theme } from "../../theme";
import { ImageSourcePropType } from "react-native";
const loginImage = require("../../../assets/login.png");
const registerImage = require("../../../assets/register.png");
const profileImage = require("../../../assets/profile.png");
const notifyImage = require("../../../assets/notify.png");

type Attrs = {
  source?: ImageSourcePropType;
};

type Props = {
  theme: Theme;
};

const src = (image: any) => {
  return (props: any) => ({
    source: image,
  });
};

const Image = styled.Image.attrs<Attrs>;

export const LoginTitle = Image(src(loginImage))<Props>`
  width: ${({ theme }) => theme.px(182)}px;
  height: ${({ theme }) => theme.px(51)}px;
`;

export const RegisterTitle = Image(src(registerImage))<Props>`
  width: ${({ theme }) => theme.px(182)}px;
  height: ${({ theme }) => theme.px(51)}px;
`;

export const ProfileImage = Image(src(profileImage))<Props>`
  height: ${({ theme }) => theme.px(34)}px;
  width: ${({ theme }) => theme.px(34)}px;
`;

export const NotifyImage = Image(src(notifyImage))<Props>`
  height: ${({ theme }) => theme.px(24)}px;
  width: ${({ theme }) => theme.px(24)}px;
`;
