import "./AddBuyingForm.css";
import React from "react";
import { createPortal } from "react-dom";
import { Input } from "../input/Input";
import { Counter } from '../counter/index'
import Select from "../select/Select";

function AddBuyingForm(props) {
  const { addToItemList, setModalIsOpen } = props;
  const options = ['Штуки', 'Килограммы', 'Литры', 'Упаковки' ];
  const defaultValue = 'Выберите еденицы измерения'
  
  const node = document.getElementById('modal');

  const handleClick = (e) => {
    if (e.target.id === 'form-container') {
      setModalIsOpen(false);
    }
  }; 

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    let amount = Number(document.querySelector('.count').textContent)
    
    const {
      name: { value: name },
      price: { value: price },
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
          <div className="form-content">
          <p className="input-description">Название товара:</p>
          <Input className="input-form" placeholder='Название' inputId='name'/>
          <p className="input-description">Цена:</p>
          <Input className="input-form" placeholder='Цена' inputId='price'/>
          <p className="input-description">Количество:</p>
          <Counter inputId='amount' />
          <p className="input-description">Единицы измерения:</p>
          
          <Select options={ options } defVal={defaultValue}/>
          <div className="buttons">
            <button className="submit-button" type="Submit" >Добавить</button>
            <button className="cancel-button" type="close" >Отмена</button>
          </div>
          </div>
        </form>
      </div>
    ), node);
}

export default AddBuyingForm;

