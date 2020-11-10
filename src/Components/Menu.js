import React, { useContext } from "react";
import { CaffeContext } from "../ContextProvider";
import "./Menu.css";

const Menu = () => {
  const { guest, setOrders } = useContext(CaffeContext);

  const pastas = [
    { Milanese: 320 },
    { Bolognese: 350 },
    { Lasagna: 380 },
    { Carbonara: 360 },
  ];
  const pizzas = [
    { Sicilian: 250 },
    { Caprese: 220 },
    { Pepperoni: 300 },
    { Margherita: 280 },
    { Napoletana: 200 },
  ];
  const drinks = [
    { Cola: 80 },
    { Sprite: 80 },
    { Fanta: 80 },
    { Tea: 50 },
    { Coffe: 60 },
  ];

  const AddProduct = (product) => {
    !!guest.guestNum &&
      setOrders((prevState) => prevState.concat({ ...guest, product }));
  };

  return (
    <div className='menu'>
      <div className='products'>
        <h4 className='pasta-pizza-drink-menu'>Pasta:</h4>
        {pastas.map((pasta) => (
          <li
            key={Object.keys(pasta)}
            className='menu-item'
            onClick={() => AddProduct(pasta)}
          >
            {Object.keys(pasta)}
            {""} {Object.values(pasta)}
          </li>
        ))}
      </div>

      <div className='products'>
        <h4 className='pasta-pizza-drink-menu'>Pizza:</h4>
        {pizzas.map((pizza) => (
          <li
            key={Object.keys(pizza)}
            className='menu-item'
            onClick={() => AddProduct(pizza)}
          >
            {Object.keys(pizza)}
            {""} {Object.values(pizza)}
          </li>
        ))}
      </div>
      <div className='products'>
        <h4 className='pasta-pizza-drink-menu'>Drink:</h4>
        {drinks.map((drink) => (
          <li
            key={Object.keys(drink)}
            className='menu-item'
            onClick={() => AddProduct(drink)}
          >
            {Object.keys(drink)}
            {""} {Object.values(drink)}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Menu;
