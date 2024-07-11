import { Theme } from "@/theme/types";
import styled from "styled-components/native";

export const ScrollView = styled.ScrollView<{ theme: Theme }>`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
