import { Dispatch, SetStateAction, createContext } from "react";
import { Category, Tabs } from "./types";

export type SetTab = Dispatch<SetStateAction<Tabs>>;
export type SetCategories = Dispatch<SetStateAction<Array<Category>>>;

export const MainContext = createContext<{
  tab: Tabs;
  setTab: SetTab;
  categories: Array<Category>;
  setCategories: SetCategories;
}>({
  tab: "Resume",
  setTab: () => {},
  categories: [],
  setCategories: () => {},
});
