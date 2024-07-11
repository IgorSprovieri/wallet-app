import styled from "styled-components/native";
import type { Theme } from "@/theme/types";

export const TouchableOpacity = styled.TouchableOpacity<{ theme: Theme }>`
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

export const Text = styled.Text<{ theme: Theme }>`
  font-family: "Inter-Light";
  font-size: ${({ theme }) => theme.px(20)}px;
  color: ${({ theme }) => theme.bg};
`;
