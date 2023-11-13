import styled from "styled-components/native";
import { Theme } from "../../theme";

export const MainContainer = styled.View<{ theme: Theme }>`
  width: auto;
  height: ${({ theme }) => theme.px(50)}px;
  justify-content: space-between;
`;

export const Text = styled.Text<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(220)}px;
  text-align: left;
  font-family: "Inter-Light";
  font-size: ${({ theme }) => theme.px(14)}px;
  color: white;
  padding-left: ${({ theme }) => theme.px(12)}px;
`;

export const TextInput = styled.TextInput<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(250)}px;
  height: ${({ theme }) => theme.px(26)}px;

  border-radius: ${({ theme }) => theme.px(8)}px;
  font-family: "Inter-Light";
  font-size: ${({ theme }) => theme.px(14)}px;
  padding-left: ${({ theme }) => theme.px(12)}px;
  color: white;
  padding-bottom: ${({ theme }) => theme.px(2)}px;
  background-color: #003271;
`;
