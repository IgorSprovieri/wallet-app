import styled from "styled-components/native";
import type { Theme } from "../../../types";

export const ScrollView = styled.ScrollView<{ theme: Theme }>`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
