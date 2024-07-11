import styled from "styled-components/native";
import { Platform } from "react-native";
import type { Theme } from "@/theme/types";

export const MainContainer = styled.View<{ theme: Theme }>`
  width: 100%;
  height: ${({ theme }) => theme.px(50)}px;
  background-color: white;
  ${Platform.OS === "android"
    ? "elevation: 5;"
    : "box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25)"};
  border-radius: ${({ theme }) => theme.px(10)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.px(8)}px;
  margin-bottom: ${({ theme }) => theme.px(16)}px;
`;

export const Image = styled.Image<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(20)}px;
  height: ${({ theme }) => theme.px(20)}px;
`;

export const TextInput = styled.TextInput<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(168)}px;
  height: ${({ theme }) => theme.px(24)}px;
  font-family: "Inter-Regular";
  font-size: ${({ theme }) => theme.px(12)}px;
  color: ${({ theme }) => theme.bg};
  border: 1.5px solid ${({ theme }) => theme.gray};
  border-radius: ${({ theme }) => theme.px(8)}px;
  padding-left: ${({ theme }) => theme.px(8)}px;
  margin-right: ${({ theme }) => theme.px(8)}px;
`;

export const TouchableOpacity = styled.TouchableOpacity<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(24)}px;
  height: ${({ theme }) => theme.px(24)}px;
  margin-right: ${({ theme }) => theme.px(6)}px;
`;
