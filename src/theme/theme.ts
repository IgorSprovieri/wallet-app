import { Vh, vh } from "./vh";
import { Px, px } from "./px";

export type Theme = {
  px: Px;
  vh: Vh;
  bg: string;
  orange: string;
  wave: string;
  err: string;
  gray: string;
  white: string;
  blue: string;
};

export const theme: Theme = {
  px: px,
  vh: vh,
  bg: "#001D41",
  orange: "#FFA245",
  wave: "#003271",
  err: "#F27474",
  gray: "#B0B0B0",
  white: "#FFFFFF",
  blue: "#4F7DEA",
};
