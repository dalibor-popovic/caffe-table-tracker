import React, { useState } from "react";
import { ReactComponent as Icon } from "../assets/restaurant.svg";
import "./Header.css";
import ManageTables from "./ManageTables";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <h3>Caffe</h3>
      <Icon className='icon' />
      <div className='dropdown-container'>
        <div onClick={() => setOpen(!open)} className='add-table-icon'>
          &#9661;
        </div>
        {open && (
          <div className='tabels-dropdown'>
            <h4 className='tabels-drop-header'>Num of Tabels</h4>
            <ManageTables />
            <h4 className='tabels-drop-done' onClick={() => setOpen(!open)}>
              Done
            </h4>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
