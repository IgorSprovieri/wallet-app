import styled from "styled-components/native";
import type { Theme } from "../../../types";

export const MainContainer = styled.TouchableOpacity<{
  theme: Theme;
  mr?: number;
  ml?: number;
}>`
  width: ${({ theme }) => theme.px(84)}px;
  height: ${({ theme }) => theme.px(84)}px;
  background-color: white;
  border-radius: ${({ theme }) => theme.px(10)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1.5px solid ${({ theme }) => theme.lightGray};
  margin-right: ${({ theme, mr }) => theme.px(mr || 0)}px;
  margin-left: ${({ theme, ml }) => theme.px(ml || 0)}px;
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
