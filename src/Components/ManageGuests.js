import React from "react";
import "./ManageGuests.css";

const ManageGuests = ({ howManyGuests, setHowManyGuests }) => {
  const handleIncrement = () => {
    setHowManyGuests((state) => ({ length: state.length + 1 }));
  };

  const handleDecrement = () => {
    setHowManyGuests((state) => ({ length: state.length - 1 }));
  };

  return (
    <div className='add-remove-guest'>
      <button onClick={handleDecrement}>&#8722;</button>
      <button>{howManyGuests.length}</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ManageGuests;
