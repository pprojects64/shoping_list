import React from "react";
import "./ShopingList.css";
import ShopingItem from "../list-item/ShopingItem";

function ShopingList({ items }) {
  return (
    <ul className="shop-list">
      {items.map((item, index) => (
        <ShopingItem {...item} index={index} key={item.id} />
      ))}
    </ul>
  );
}
export default ShopingList;
