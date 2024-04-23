
import React from 'react';
import logo from '../images/logo1.png';
import { GrCart } from "react-icons/gr";
import './header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="header__search">
          <input
            type="text"
            placeholder="Search for the product by name"
          />
          <button type="button">search</button>
        </div>
        <ul className="header__actions">
          <li>
            <a href="/user/login">Login</a>
          </li>
          <li>
            <a href="/user/register">Register</a>
          </li>
          <li>
            <a href="#"> <GrCart style={{ fontSize: '30px',  }}  /> &nbsp; Cart</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
