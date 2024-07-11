import { Theme } from "@/theme/types";
import styled from "styled-components/native";

export const MainContainer = styled.View<{ theme: Theme }>`
  margin-top: ${({ theme }) => theme.px(24)}px;
  margin-bottom: ${({ theme }) => theme.px(16)}px;
  width: ${({ theme }) => theme.px(240)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
