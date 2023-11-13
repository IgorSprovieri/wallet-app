import styled from "styled-components/native";
import { Theme } from "../../theme";

export const MainContainer = styled.View<{ theme: Theme }>`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.View<{ theme: Theme }>`
  width: 100%;
  height: ${({ theme }) => theme.px(370)}px;
  align-items: center;
  justify-content: space-between;
`;

export const RegisterTitle = styled.Image<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(182)}px;
  height: ${({ theme }) => theme.px(51)}px;
`;
