import "./Select.css";
import { nanoid } from 'nanoid';
import useChoices from "../../utils/useChoices";


function Select({options}) {

  // хук инициализирует библиотеку choices.js, чтоб кастомизировать скролл
  useChoices();

  return (
    <select 
      className='select-form' 
      id='select' 
      required={true}  
      name='unit'
    >
      {options.map((option) =>
        <option value={option} key={ nanoid() }>
          { option }
        </option>
      )}
    </select>
  )
}

export default Select;

