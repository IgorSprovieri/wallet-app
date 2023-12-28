type Vh = number;
type Px = (valuePx: number) => number;

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
