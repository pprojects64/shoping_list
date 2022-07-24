import "./Modal.css";
import React from "react";
import { createPortal } from "react-dom";
import { Input } from "../input/Input";
import { Counter } from "../counter/index";
import Select from "../select/Select";

function Modal(props) {
  const {
    handleSubmit,
    handleClick,
    add,
    price = "",
    name = "",
    amount = 1,
    unit = "шт",
  } = props;

  console.log(props);

  const options = ["шт", "кг", "л", "уп"];

  const node = document.getElementById("modal");

  if (!node) return null;

  return createPortal(
    <div className="form-container" onClick={handleClick} id="form-container">
      <form className="addBuyingForm" onSubmit={handleSubmit}>
        <h1 className="modal-name">
          {add ? "Добавление товара" : "Изменение товара"}
        </h1>
        <p className="input-description">Наименование товара:</p>
        <Input
          className="input-form"
          placeholder="Название"
          inputId="name"
          initValue={name}
        />
        <p className="input-description">Цена:</p>
        <Input
          className="input-form"
          placeholder="Цена"
          inputId="price"
          type="number"
          initValue={price}
        />
        <p className="input-description">Количество:</p>
        <Counter inputId="amount" initValue={amount} />
        <p className="input-description">Единицы измерения:</p>
        <Select options={options} initValue={unit} />
        <div className="buttons">
          <button className="submit-button" type="Submit">
            {add ? "Добавить" : "Изменить"}
          </button>
          <button className="cancel-button" type="close">
            Отмена
          </button>
        </div>
      </form>
    </div>,
    node
  );
}

export default Modal;
