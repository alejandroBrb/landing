import React from "react";
import Menu from "./Menu";
import Hero from "./Hero/Hero";

import { PortfolioProvider } from "../context/context";

function App() {
  return (
    <PortfolioProvider value={{}}>
      <Menu />
      <Hero />
    </PortfolioProvider>
  );
}

export default App;
