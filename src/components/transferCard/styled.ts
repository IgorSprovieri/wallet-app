import styled from "styled-components/native";
import { Theme } from "../../theme";

export const MainContainer = styled.TouchableOpacity<{ theme: Theme }>`
  width: 100%;
  height: ${({ theme }) => theme.px(34)}px;
  margin-bottom: ${({ theme }) => theme.px(16)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftContainer = styled.View<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftContentContainer = styled.View<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  height: ${({ theme }) => theme.px(30)}px;
`;

export const RightContainer = styled.View<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin-right: ${({ theme }) => theme.px(4)}px;
`;

export const Circle = styled.View<{ theme: Theme; color?: string }>`
  width: ${({ theme }) => theme.px(34)}px;
  height: ${({ theme }) => theme.px(34)}px;
  border-radius: ${({ theme }) => theme.px(34)}px;
  margin-right: ${({ theme }) => theme.px(8)}px;
  background-color: ${({ theme, color }) => color || theme.lightGray};
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image<{ theme: Theme }>`
  width: ${({ theme }) => theme.px(20)}px;
  height: ${({ theme }) => theme.px(20)}px;
`;

export const Title = styled.Text<{ theme: Theme }>`
  font-family: "Inter-Medium";
  font-size: ${({ theme }) => theme.px(13)}px;
  color: ${({ theme }) => theme.bg};
`;

export const Value = styled.Text<{ theme: Theme }>`
  font-family: "Inter-SemiBold";
  font-size: ${({ theme }) => theme.px(11.5)}px;
  color: ${({ theme }) => theme.gray};
`;

export const Date = styled.Text<{ theme: Theme }>`
  font-family: "Inter-SemiBold";
  font-size: ${({ theme }) => theme.px(12)}px;
  color: ${({ theme }) => theme.gray};
`;

export const Expensive = styled.Text<{ theme: Theme; value: number }>`
  font-family: "Inter-SemiBold";
  font-size: ${({ theme }) => theme.px(12)}px;
  color: ${({ theme, value }) => (value < 0 ? theme.red : theme.green)};
`;
