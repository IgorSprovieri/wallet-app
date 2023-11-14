import styled from "styled-components/native";
import { Theme } from "../../theme";

export const MainContainer = styled.View<{ theme: Theme }>`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const ContentContainer = styled.View<{ theme: Theme }>`
  height: 100%;
  width: 100%;
  background-color: white;
  border-top-right-radius: ${({ theme }) => theme.px(24)}px;
  border-top-left-radius: ${({ theme }) => theme.px(24)}px;
  padding: ${({ theme }) => theme.px(24)}px;
`;

export const HeaderContainer = styled.View<{ theme: Theme }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text<{ theme: Theme }>`
  font-family: "Inter-Bold";
  font-size: ${({ theme }) => theme.px(19)}px;
  color: ${({ theme }) => theme.bg};
`;
