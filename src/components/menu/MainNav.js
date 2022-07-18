import { Link } from 'react-router-dom';
import React from 'react'
import './styles.css'

function MainNav() {
  return (
    <nav>
      <ul>
        <Link to={'/'}>Главная</Link>
        <Link to={'/settings'}>Настройки</Link>
      </ul>
    </nav>
  )
}
export default MainNav;