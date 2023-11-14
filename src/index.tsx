import { useState } from "react";
import { MainContext } from "./context";
import { Router } from "./router";
import { Category, Tabs } from "./types";

export const Provider = () => {
  const [tab, setTab] = useState<Tabs>("Resume");
  const [categories, setCategories] = useState<Array<Category>>([]);

  return (
    <MainContext.Provider value={{ tab, setTab, categories, setCategories }}>
      <Router />
    </MainContext.Provider>
  );
};
