import styled from "styled-components/native";
import type { Theme } from "@/theme/types";

export const MainContainer = styled.View<{ theme: Theme }>`
  margin-top: ${({ theme }) => theme.px(32)}px;
  width: ${({ theme }) => theme.px(272)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(272)}px;
  text-align: left;
  font-family: "Inter-Light";
  font-size: ${({ theme }) => theme.px(12)}px;
  color: ${({ theme }) => theme.gray};
`;

export const ValueText = styled.Text<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(272)}px;
  text-align: left;
  font-family: "Inter-Medium";
  font-size: ${({ theme }) => theme.px(26)}px;
  color: white;
`;
