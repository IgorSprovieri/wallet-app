import { Dispatch, SetStateAction, createContext } from "react";
import { Tabs } from "./types";

export const MainContext = createContext<{
  tab: Tabs;
  setTab: Dispatch<SetStateAction<Tabs>>;
}>({ tab: "Resume", setTab: () => {} });
