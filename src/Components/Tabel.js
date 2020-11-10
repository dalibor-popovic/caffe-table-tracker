import React, { useState, useContext } from "react";
import Guest from "./Guest";
import { CaffeContext } from "../ContextProvider";
import ManageGuests from "./ManageGuests";
import "./Tabel.css";

const Tabel = ({ tableNum }) => {
  const [tabels, setTabels] = useState({});
  const [open, setOpen] = useState(false);
  const [howManyGuests, setHowManyGuests] = useState({ length: 4 });
  const { orders, setGuest, setOrders, setCaffeProfit, reducer } = useContext(
    CaffeContext
  );

  const guestPrice = orders.map(
    (order) =>
      tableNum === order.tableNum &&
      Object.values(order.product).reduce(reducer)
  );

  const tablePrice = !!guestPrice.length && guestPrice.reduce(reducer);

  const Complete = (tNum) => {
    setGuest({
      guestNum: "",
      tableNum: "",
    });
    setTabels({ ...tabels, [tNum]: true });
  };

  const PayABill = (tNum) => {
    setCaffeProfit((prevState) => [...prevState, tablePrice]);

    setOrders((prevState) =>
      prevState.filter((each) => each.tableNum !== tNum)
    );

    setTabels({ ...tabels, [tNum]: false });
  };

  const guests = Array.from(howManyGuests);

  return (
    <div className='tabel-container'>
      <div className='tabel-header'>
        <div> Number of tabel: {tableNum}</div>
        <div className='add-guest-dropdown-icon' onClick={() => setOpen(!open)}>
          &#8860;
        </div>
      </div>
      {open && (
        <div className='guest-dropdown'>
          <h4>Num of Guests</h4>
          <ManageGuests
            setHowManyGuests={setHowManyGuests}
            howManyGuests={howManyGuests}
          />
          <h4 className='guest-drop-done' onClick={() => setOpen(!open)}>
            Done
          </h4>
        </div>
      )}
      <div className='tabel'>
        <div className='guests-container'>
          {guests.map((_, idx) => (
            <Guest
              key={idx + 1}
              guestNum={idx + 1}
              tableNum={tableNum}
              tabels={tabels}
            />
          ))}
        </div>
        <div className='tabel-buttons'>
          <button
            onClick={() => Complete(tableNum)}
            className={tabels[tableNum] ? "disabled-button" : ""}
          >
            Complete
          </button>
          <button
            className={tabels[tableNum] ? "" : "disable-button"}
            onClick={() => PayABill(tableNum)}
          >
            Pay
          </button>
        </div>
        <div className='tabel-bill'>
          <h5>Total bill:</h5>
          <h5
            className={!tabels[tableNum] ? "tabel-price" : "tabel-price-to-pay"}
          >
            {tablePrice > 0 && tablePrice}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Tabel;
