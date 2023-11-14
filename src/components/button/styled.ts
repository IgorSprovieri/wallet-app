import styled from "styled-components/native";
import { Theme } from "../../theme";

export type ButtonVariant = "solid" | "ghost";

type Props = {
  theme: Theme;
  variant: ButtonVariant;
};

type Variant = {
  bgColor: string;
  color: string;
};

type Variants = {
  solid: Variant;
  ghost: Variant;
};

const variants: Variants = {
  solid: {
    bgColor: "orange",
    color: "bg",
  },
  ghost: {
    bgColor: "transparent",
    color: "white",
  },
};

type StyledProps = { mt?: number; w?: number; h?: number };

export const TouchableOpacity = styled.TouchableOpacity<Props & StyledProps>`
  width: ${({ theme, w }) => theme.px(w || 220)}px;
  height: ${({ theme, h }) => theme.px(h || 36)}px;
  background-color: ${({ theme, variant }) => theme[variants[variant].bgColor]};
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.px(12)}px;
  margin-top: ${({ theme, mt }) => theme.px(mt || 0)}px;
`;

export const Text = styled.Text<Props>`
  color: ${({ theme, variant }) => theme[variants[variant].color]};
  font-size: ${({ theme }) => theme.px(16)}px;
  font-family: "Inter-Light";
`;
