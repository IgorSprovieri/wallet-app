import styled from "styled-components/native";
import { Theme } from "../../theme";

export const MainContainer = styled.View<{ theme: Theme }>`
  margin-top: ${({ theme }) => theme.px(50)}px;
  width: ${({ theme }) => theme.px(240)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
