export type Vh = number;
export type Px = (valuePx: number) => number;

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

export type AppColors =
  | "#FFEAC8"
  | "#EBE3FC"
  | "#FFE9F5"
  | "#D9F2FF"
  | "#E4E4E4"
  | "#D0F2D1"
  | "#FFD9D9";

export enum AppColorsNames {
  Orange = "orange",
  Purple = "purple",
  Pink = "pink",
  Blue = "blue",
  Gray = "gray",
  Green = "green",
  Red = "red",
}
export type AppIcons =
  | "academic-cap"
  | "aerial"
  | "airplane"
  | "at-symbol"
  | "bitcoin"
  | "book-open"
  | "bookmark"
  | "box"
  | "briefcase-alt"
  | "building"
  | "bulb-on"
  | "cake"
  | "cash"
  | "code-alt"
  | "credit-card"
  | "desktop"
  | "diamond"
  | "dollar"
  | "edit"
  | "Frame-1"
  | "Frame-2"
  | "Frame"
  | "ghost"
  | "gift"
  | "globe"
  | "goblet"
  | "heart"
  | "home-alt"
  | "keyboard"
  | "lamp"
  | "mobile"
  | "more-horizontal"
  | "mug"
  | "phone"
  | "scissors"
  | "shopping-bag"
  | "shopping-cart"
  | "star"
  | "sun"
  | "support";

export enum AppIconNames {
  AcademicCap = "academic-cap",
  Aerial = "aerial",
  Airplane = "airplane",
  AtSymbol = "at-symbol",
  Bitcoin = "bitcoin",
  BookOpen = "book-open",
  Bookmark = "bookmark",
  Box = "box",
  BriefcaseAlt = "briefcase-alt",
  Building = "building",
  BulbOn = "bulb-on",
  Cake = "cake",
  Cash = "cash",
  CodeAlt = "code-alt",
  CreditCard = "credit-card",
  Desktop = "desktop",
  Diamond = "diamond",
  Dollar = "dollar",
  Edit = "edit",
  Frame1 = "Frame-1",
  Frame2 = "Frame-2",
  Frame = "Frame",
  Ghost = "ghost",
  Gift = "gift",
  Globe = "globe",
  Goblet = "goblet",
  Heart = "heart",
  HomeAlt = "home-alt",
  Keyboard = "keyboard",
  Lamp = "lamp",
  Mobile = "mobile",
  MoreHorizontal = "more-horizontal",
  Mug = "mug",
  Phone = "phone",
  Scissors = "scissors",
  ShoppingBag = "shopping-bag",
  ShoppingCart = "shopping-cart",
  Star = "star",
  Sun = "sun",
  Support = "support",
}
