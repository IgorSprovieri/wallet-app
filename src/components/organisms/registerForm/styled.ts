import styled from "styled-components/native";
import type { Theme } from "../../../types";

export const MainContainer = styled.View<{ theme: Theme }>`
  width: 100%;
  height: ${({ theme }) => theme.px(370)}px;
  align-items: center;
  justify-content: space-between;
`;
