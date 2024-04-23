import React from 'react';
import './menu-seller.css';

const MenuSeller = () => {
  return (
    < menu className='menu-seller'>
        <ul className="dropdown-menu-seller">
          <li><a className="dropdown-item-seller" href="/seller/dashboard">Dashboard</a></li>
          <li><a className="dropdown-item-seller" href="/seller/allproduct">All Products</a></li>
          <li><a className="dropdown-item-seller" href="/seller/createproduct">New Product</a></li>
        </ul>
    </menu>
  )
}

export default MenuSeller;