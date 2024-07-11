import styled from "styled-components/native";
import type { Theme } from "@/theme/types";

export const MainContainer = styled.View<{ theme: Theme; mt: number }>`
  width: auto;
  height: ${({ theme }) => theme.px(50)}px;
  justify-content: space-between;
  margin-top: ${({ mt }) => mt}px;
`;

export const Text = styled.Text<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(220)}px;
  text-align: left;
  font-family: "Inter-Light";
  font-size: ${({ theme }) => theme.px(14)}px;
  color: white;
  padding-left: ${({ theme }) => theme.px(12)}px;
`;

export const TextInput = styled.TextInput<{
  theme: Theme;
  err: string | undefined;
}>`
  width: ${({ theme }) => theme.px(250)}px;
  height: ${({ theme }) => theme.px(26)}px;
  border: 1.5px solid ${({ theme, err }) => (err ? theme.err : theme.wave)};
  border-radius: ${({ theme }) => theme.px(8)}px;
  font-family: "Inter-Light";
  font-size: ${({ theme }) => theme.px(13)}px;
  padding-left: ${({ theme }) => theme.px(12)}px;
  color: white;
  padding-bottom: ${({ theme }) => theme.px(2)}px;
  background-color: ${({ theme }) => theme.wave};
`;
