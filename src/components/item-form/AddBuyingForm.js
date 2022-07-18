import "./AddBuyingForm.css";
import React from "react";
import { createPortal } from "react-dom";
import { Input } from "../input/Input";

function AddBuyingForm(props) {
  const { addToItemList, setModalIsOpen } = props;

  const node = document.getElementById('modal');

  const handleClick = (e) => {
    if (e.target.id === 'form-container') {
      setModalIsOpen(false);
    }
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const form = event.target;
    const {
      name: { value: name },
      price: { value: price },
      amount: { value: amount },
      unit: { value: unit },
    } = form;
  
    addToItemList({ name, price, amount, unit });
    setModalIsOpen(false);
  };

  if (!node) return null;

  return createPortal((
      <div 
        className="form-container" 
        onClick={handleClick} 
        id='form-container'
      >
        <form 
        className="addBuyingForm" 
        onSubmit={handleSubmit}
        >
          <h1 className="modal-name">Добавление товара</h1>
          <p className="input-description">Название товара:</p>
          <Input className="input-form" placeholder='Название' inputId='name'/>
          <p className="input-description">Цена:</p>
          <Input className="input-form" placeholder='Цена' inputId='price'/>
          <p className="input-description">Количество:</p>
          <Input className="input-form" placeholder='Количество' inputId='amount'/>
          <p className="input-description">Единица измерения:</p>
          <Input className="input-form" placeholder='шт / л / кг' inputId='unit'/>
          <button className="submit-button" type="Submit">Добавить</button>
        </form>
      </div>
    ), node);
}

export default AddBuyingForm;

