import { Vh, vh } from "./vh";
import { Px, px } from "./px";

export type Theme = {
  px: Px;
  vh: Vh;
  bg: string;
  orange: string;
  wave: string;
  err: string;
  red: string;
  green: string;
  gray: string;
  white: string;
  blue: string;
  lightGray: string;
};

export const theme: Theme = {
  px: px,
  vh: vh,
  bg: "#001D41",
  orange: "#FFA245",
  wave: "#003271",
  err: "#F27474",
  gray: "#B0B0B0",
  lightGray: "#E4E4E4",
  white: "#FFFFFF",
  blue: "#4F7DEA",
  red: "#F27474",
  green: "#83AA58",
};
