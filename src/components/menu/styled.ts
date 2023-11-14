import styled from "styled-components/native";
import { Theme } from "../../theme";

export const MainContainer = styled.View<{ theme: Theme }>`
  margin-top: ${({ theme }) => theme.px(32)}px;
  margin-bottom: ${({ theme }) => theme.px(32)}px;
  width: ${({ theme }) => theme.px(240)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
