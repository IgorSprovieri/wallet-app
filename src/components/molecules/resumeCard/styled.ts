import styled from "styled-components/native";
import type { Theme } from "@/theme/types";

export const MainContainer = styled.TouchableOpacity<{ theme: Theme }>`
  width: 100%;
  height: ${({ theme }) => theme.px(34)}px;
  margin-bottom: ${({ theme }) => theme.px(12)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftContainer = styled.View<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Circle = styled.View<{ theme: Theme; color?: string }>`
  width: ${({ theme }) => theme.px(34)}px;
  height: ${({ theme }) => theme.px(34)}px;
  border-radius: ${({ theme }) => theme.px(34)}px;
  margin-right: ${({ theme }) => theme.px(8)}px;
  background-color: ${({ theme, color }) => color || theme.lightGray};
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(20)}px;
  height: ${({ theme }) => theme.px(20)}px;
`;

export const Text = styled.Text<{ theme: Theme }>`
  font-family: "Inter-Light";
  font-size: ${({ theme }) => theme.px(14)}px;
  color: ${({ theme }) => theme.bg};
`;

export const Money = styled.Text<{ theme: Theme; value: number }>`
  font-family: "Inter-SemiBold";
  font-size: ${({ theme }) => theme.px(12)}px;
  color: ${({ theme, value }) => (value < 0 ? theme.red : theme.green)};
  margin-right: ${({ theme }) => theme.px(6)}px;
`;
