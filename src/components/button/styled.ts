import styled from "styled-components/native";
import { Theme } from "../../theme";

export type ButtonVariant = "solid" | "ghost";

type Props = {
  theme: Theme;
  variant: ButtonVariant;
};

export const TouchableOpacity = styled.TouchableOpacity<Props & { mt: number }>`
  width: ${({ theme }) => theme.px(220)}px;
  height: ${({ theme }) => theme.px(36)}px;
  background-color: ${({ theme, variant }) =>
    variant === "solid" ? theme.orange : "transparent"};
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.px(12)}px;
  margin-top: ${({ theme, mt }) => theme.px(mt)}px;
`;

export const Text = styled.Text<Props>`
  color: ${({ theme, variant }) => (variant === "solid" ? theme.bg : "white")};
  font-size: ${({ theme }) => theme.px(16)}px;
  font-family: "Inter-Light";
`;
