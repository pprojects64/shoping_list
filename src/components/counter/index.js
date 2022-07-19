import React, {useState} from 'react'
import './styles.css'



export function Counter() {
  
  const [count, setCounter] = useState(1);

  let countHandler = (sym) => {
    if (count === 1) {
      if (sym === 'minus') {
        setCounter(count)
      } else setCounter(count +1)
    } else {
      sym ==='plus' ? setCounter(count + 1) : setCounter(count - 1)
    }

  };
  
  return (
  <div className="counter">
    <p className="setCounter-button" onClick={() => {countHandler('minus')}}>-</p>
    <p className='count'>{count}</p>
    <p className="setCounter-button" onClick={() => {countHandler('plus')}}>+</p>
  </div>
  )
}
