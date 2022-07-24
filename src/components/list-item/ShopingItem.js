import React, { useState } from "react";
import useStore from "../../utils/use-context";
import ModifyItemForm from "../modify-item-form/ModifyItemForm";

import "./ShopingItem.css";

function ShopingItem(data) {
  const store = useStore();
  const { name, price, amount, unit, index, id } = data;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = () => {
    store.modules.items.delete(id);
  };

  const handleModify = () => {
    setModalIsOpen(true);
  };

  return (
    <li className="shop-list__item">
      {modalIsOpen && <ModifyItemForm {...{ setModalIsOpen, data }} />}
      <span className="shop-list__data">{`${index + 1}. ${name}`}</span>
      <span className="shop-list__data">{`${price} ₽`}</span>
      <span className="shop-list__data">{`${amount} ${unit}`}</span>
      <button className="modify-button" onClick={handleModify}>
        Изменить
      </button>
      <button className="delete-button" onClick={handleDelete}>
        Удалить
      </button>
    </li>
  );
}
export default ShopingItem;
