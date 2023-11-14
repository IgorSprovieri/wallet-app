import styled from "styled-components/native";
import { Theme } from "../../theme";
import { ImageSourcePropType } from "react-native";
const loginImage = require("../../../assets/login.png");
const registerImage = require("../../../assets/register.png");
const profileImage = require("../../../assets/profile.png");
const notifyImage = require("../../../assets/notify.png");
const homeImage = require("../../../assets/home.png");
const transferImage = require("../../../assets/transfer.png");
const categoriesImage = require("../../../assets/categories.png");
const addImage = require("../../../assets/add.png");

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

export const HomeImage = Image(src(homeImage))<Props>`
  height: ${({ theme }) => theme.px(24)}px;
  width: ${({ theme }) => theme.px(24)}px;
`;

export const TransferImage = Image(src(transferImage))<Props>`
  height: ${({ theme }) => theme.px(24)}px;
  width: ${({ theme }) => theme.px(24)}px;
`;

export const CategoriesImage = Image(src(categoriesImage))<Props>`
  height: ${({ theme }) => theme.px(24)}px;
  width: ${({ theme }) => theme.px(24)}px;
`;

export const AddImage = Image(src(addImage))<Props>`
  height: ${({ theme }) => theme.px(24)}px;
  width: ${({ theme }) => theme.px(24)}px;
`;
