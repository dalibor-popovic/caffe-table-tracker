import React, { useContext } from "react";
import { CaffeContext } from "../ContextProvider";
import "./ManageTables.css";

const ManageTables = () => {
  const { howManyTables, setHowManyTables } = useContext(CaffeContext);
  const handleIncrement = () => {
    setHowManyTables((state) => ({ length: state.length + 1 }));
  };

  const handleDecrement = () => {
    setHowManyTables((state) => ({ length: state.length - 1 }));
  };

  return (
    <div className='add-remove-tables'>
      <button onClick={handleDecrement}>&#8722;</button>
      <button>{howManyTables.length}</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ManageTables;
