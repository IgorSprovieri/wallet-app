import styled from "styled-components/native";
import type { Theme } from "../../../types";
import type { ImageSourcePropType, ImageURISource } from "react-native";

const loginImage: ImageURISource = require("../../../../assets/login.png");
const registerImage: ImageURISource = require("../../../../assets/register.png");
const profileImage: ImageURISource = require("../../../../assets/profile.png");
const notifyImage: ImageURISource = require("../../../../assets/notify.png");
const homeImage: ImageURISource = require("../../../../assets/home.png");
const transferImage: ImageURISource = require("../../../../assets/transfer.png");
const categoriesImage: ImageURISource = require("../../../../assets/categories.png");
const addImage: ImageURISource = require("../../../../assets/add.png");

type Attrs = {
  source?: ImageSourcePropType;
};

type Props = {
  theme: Theme;
};

export const LoginTitleImage = styled.Image.attrs<Attrs>(() => ({
  source: loginImage,
}))<Props>`
  width: ${({ theme }) => theme.px(182)}px;
  height: ${({ theme }) => theme.px(51)}px;
`;

export const RegisterTitleImage = styled.Image.attrs<Attrs>(() => ({
  source: registerImage,
}))<Props>`
  width: ${({ theme }) => theme.px(182)}px;
  height: ${({ theme }) => theme.px(51)}px;
`;

export const ProfileImage = styled.Image.attrs<Attrs>(() => ({
  source: profileImage,
}))<Props>`
  height: ${({ theme }) => theme.px(34)}px;
  width: ${({ theme }) => theme.px(34)}px;
`;

export const NotifyImage = styled.Image.attrs<Attrs>(() => ({
  source: notifyImage,
}))<Props>`
  height: ${({ theme }) => theme.px(24)}px;
  width: ${({ theme }) => theme.px(24)}px;
`;

export const HomeImage = styled.Image.attrs<Attrs>(() => ({
  source: homeImage,
}))<Props>`
  height: ${({ theme }) => theme.px(24)}px;
  width: ${({ theme }) => theme.px(24)}px;
`;

export const TransferImage = styled.Image.attrs<Attrs>(() => ({
  source: transferImage,
}))<Props>`
  height: ${({ theme }) => theme.px(24)}px;
  width: ${({ theme }) => theme.px(24)}px;
`;

export const CategoriesImage = styled.Image.attrs<Attrs>(() => ({
  source: categoriesImage,
}))<Props>`
  height: ${({ theme }) => theme.px(24)}px;
  width: ${({ theme }) => theme.px(24)}px;
`;

export const AddImage = styled.Image.attrs<Attrs>(() => ({
  source: addImage,
}))<Props>`
  height: ${({ theme }) => theme.px(24)}px;
  width: ${({ theme }) => theme.px(24)}px;
`;
