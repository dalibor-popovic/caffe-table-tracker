import React, { useContext } from "react";
import { CaffeContext } from "../ContextProvider";
import Tabel from "./Tabel";
import "./Tabels.css";

const Tabels = () => {
  const { howManyTables } = useContext(CaffeContext);

  const tabels = Array.from(howManyTables);

  return (
    <div className='tabels'>
      {tabels.map((_, idx) => (
        <Tabel key={idx + 1} tableNum={idx + 1} />
      ))}
    </div>
  );
};

export default Tabels;
