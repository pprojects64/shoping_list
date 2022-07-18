import React from 'react';
import { useState } from 'react';
import './Input.css';

export function Input(props) {
  const { placeholder, type = 'text', inputId } = props;

  const [value, setValue] = useState('');

  return (
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      id={inputId}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}