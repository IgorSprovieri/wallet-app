import { Dispatch, SetStateAction, createContext } from "react";
import { Tabs } from "./types";

export type SetTab = Dispatch<SetStateAction<Tabs>>;

export const MainContext = createContext<{
  tab: Tabs;
  setTab: SetTab;
}>({ tab: "Resume", setTab: () => {} });
