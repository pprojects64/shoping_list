import React from "react";
// import useStore from "../../utils/use-store";

import "./ShopingItem.css";

function ShopingItem(prop) {
  
  const { name, price, amount, unit, index } = prop;

  return (
    <li className="shop-list__item">
      <span className="shop-list__index">{`${index + 1}. `}</span>
      <span className="shop-list__data">{name}</span>
      <span className="shop-list__data">{`${price} ₽`}</span>
      <span className="shop-list__data">{`${amount} ${unit}`}</span>
    </li>
  );
}
export default ShopingItem;
