import styled from "styled-components/native";
import type { Theme } from "@/theme/types";

export const TouchableOpacity = styled.TouchableOpacity<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(74)}px;
  height: ${({ theme }) => theme.px(24)}px;
  border-radius: ${({ theme }) => theme.px(25)}px;
  background-color: ${({ theme }) => theme.blue};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text<{
  theme: Theme;
}>`
  font-family: "Inter-SemiBold";
  font-size: ${({ theme }) => theme.px(11)}px;
  color: white;
`;
