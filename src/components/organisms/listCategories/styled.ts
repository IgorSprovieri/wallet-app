import styled from "styled-components/native";
import type { Theme } from "@/theme/types";

export const MainContainer = styled.View<{ theme: Theme }>`
  flex: 1;
  align-items: center;
`;

export const ItemSeparator = styled.View<{ theme: Theme }>`
  height: ${({ theme }) => theme.px(8)}px;
`;
