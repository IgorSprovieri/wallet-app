import styled from "styled-components/native";
import { Theme } from "../../theme";

export const MainContainer = styled.View<{ theme: Theme }>`
  margin-top: ${({ theme }) => theme.px(44)}px;
  width: ${({ theme }) => theme.px(272)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NameText = styled.Text<{ theme: Theme }>`
  text-align: center;
  font-family: "Inter-Light";
  font-size: ${({ theme }) => theme.px(14)}px;
  color: white;
`;
