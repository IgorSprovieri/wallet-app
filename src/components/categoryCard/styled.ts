import { Platform } from "react-native";
import styled from "styled-components/native";
import { Theme } from "../../theme";

export const MainContainer = styled.TouchableOpacity<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(84)}px;
  height: ${({ theme }) => theme.px(84)}px;
  background-color: white;
  border-radius: ${({ theme }) => theme.px(10)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1.5px solid ${({ theme }) => theme.lightGray};
  margin-bottom: ${({ theme }) => theme.px(8)}px;
  margin-right: ${({ theme }) => theme.px(3)}px;
  margin-left: ${({ theme }) => theme.px(3)}px;
`;

export const Circle = styled.View<{ theme: Theme; color?: string | undefined }>`
  width: ${({ theme }) => theme.px(34)}px;
  height: ${({ theme }) => theme.px(34)}px;
  border-radius: ${({ theme }) => theme.px(34)}px;
  background-color: ${({ theme, color }) => color || theme.lightGray};
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.px(6)}px;
`;

export const Image = styled.Image<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(20)}px;
  height: ${({ theme }) => theme.px(20)}px;
`;

export const Text = styled.Text<{ theme: Theme }>`
  font-family: "Inter-Light";
  font-size: ${({ theme }) => theme.px(10)}px;
  color: ${({ theme }) => theme.bg};
  border-radius: ${({ theme }) => theme.px(8)}px;
  margin-bottom: ${({ theme }) => theme.px(8)}px;
`;