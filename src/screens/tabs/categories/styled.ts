import styled from "styled-components/native";
import { Theme } from "../../../theme";

export const MainContainer = styled.View<{ theme: Theme }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const CategoryAddCard = styled.TouchableOpacity<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(84)}px;
  height: ${({ theme }) => theme.px(84)}px;
  background-color: white;
  border-radius: ${({ theme }) => theme.px(10)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1.5px solid ${({ theme }) => theme.lightGray};
  margin-bottom: ${({ theme }) => theme.px(8)}px;
  margin-right: ${({ theme }) => theme.px(3)}px;
  margin-left: ${({ theme }) => theme.px(3)}px;
`;

export const CategoryAddCardText = styled.Text<{ theme: Theme }>`
  font-family: "Inter-Light";
  font-size: ${({ theme }) => theme.px(20)}px;
  color: ${({ theme }) => theme.bg};
`;
