import { useState } from "react";
import { MainContext } from "./context";
import { Router } from "./router";
import { Tabs } from "./types";

export const Provider = () => {
  const [tab, setTab] = useState<Tabs>("Resume");

  return (
    <MainContext.Provider value={{ tab, setTab }}>
      <Router />
    </MainContext.Provider>
  );
};
