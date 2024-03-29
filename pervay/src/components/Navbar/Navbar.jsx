import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile'>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/dialogs'>Massage</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/news'>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/music'>Music</NavLink>
    </div>
    <div className={s.item}>
      <a>Settings</a>
    </div>
  </nav>
}

export default Navbar;