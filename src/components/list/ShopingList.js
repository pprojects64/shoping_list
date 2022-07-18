import React from "react";
import "./ShopingList.css";
import ShopingItem from "../list-item/ShopingItem";
import { nanoid } from 'nanoid'

function ShopingList({items}) {

  return (
    <ul className="shop-list">
      {items.map((item, index) => (
        <ShopingItem {...item} index={index} key={nanoid(9)} />
      ))}
    </ul>
  );
}
export default ShopingList;
