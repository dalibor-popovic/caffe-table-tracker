import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Tabels from "./Components/Tabels";
import TotalProfit from "./Components/TotalProfit";
import { CaffeProvider } from "./ContextProvider";

const App = () => {
  return (
    <div className='app'>
      <CaffeProvider>
        <Header />
        <Menu />
        <Tabels />
        <TotalProfit />
      </CaffeProvider>
    </div>
  );
};

export default App;
