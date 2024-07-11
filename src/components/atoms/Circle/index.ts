import styled from "styled-components/native";
import type { Theme, AppColors } from "@/theme/types";

export const Circle = styled.View<{
  theme: Theme;
  color?: AppColors | undefined;
}>`
  width: ${({ theme }) => theme.px(34)}px;
  height: ${({ theme }) => theme.px(34)}px;
  border-radius: ${({ theme }) => theme.px(34)}px;
  margin-right: ${({ theme }) => theme.px(8)}px;
  background-color: ${({ theme, color }) => color || theme.lightGray};
  align-items: center;
  justify-content: center;
`;
