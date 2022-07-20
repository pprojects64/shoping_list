import "./Select.css";
import { nanoid } from 'nanoid';
import useChoices from "../../utils/useChoices";


function Select({options, defVal}) {

  // хук инициализирует библиотеку choices.js, чтоб кастомизировать скролл
  useChoices();

  return (
    <select 
      className='select-form' 
      id='select' 
      required={true}  
      name='unit'
    >
      <option disabled>{defVal}</option>
      {options.map((option) =>
        <option value={option} key={ nanoid() }>
          { option }
        </option>
      )}
    </select>
  )
}

export default Select;

