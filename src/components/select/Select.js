import "./Select.css";
import { nanoid } from 'nanoid';
import useChoices from "../../hooks/useChoices";


function Select({options}) {

  // хук инициализирует библиотеку choices.js, чтоб кастомизировать скролл
  useChoices();

  return (
    <select 
      className='select' 
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

