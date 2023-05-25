import React from 'react'
import "../../assets/components/layout/Header.scss";
import {NavLink, useNavigaet} from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
            <h1><NavLink to="/">React</NavLink></h1>
        </div>

        <ul className="menu">
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/employees">Employees</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header