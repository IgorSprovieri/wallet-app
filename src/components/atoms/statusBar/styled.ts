import Constants from "expo-constants";
import styled from "styled-components/native";
import type { Theme } from "@/theme/types";
const statusBarHeight = Constants.statusBarHeight;

export const StatusBarHeight = styled.View<{ theme: Theme }>`
  width: 100%;
  height: ${statusBarHeight}px;
  background-color: ${({ theme }) => theme.bg};
`;
