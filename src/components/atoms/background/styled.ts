import styled from "styled-components/native";
import type { Theme } from "../../../types";

export const MainContainer = styled.View<{ theme: Theme }>`
  width: 100%;
  height: ${({ theme }) => theme.vh}px;
  background-color: ${({ theme }) => theme.bg};
`;

export const Wave = styled.Image<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(563.76)}px;
  height: ${({ theme }) => theme.px(70)}px;
  position: absolute;
  left: ${({ theme }) => theme.px(-122)}px;
  top: ${({ theme }) => theme.px(32)}px;
  z-index: -1;
`;
