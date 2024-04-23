
import React from 'react';
import logo from '../../images/logo1.png'
import { RiContactsLine } from "react-icons/ri";
import './header-seller.css'



const HeaderSeller = () => {
    return (
        <header className="header-seller">
            <div className="container-seller">
                <h2>name store</h2>
                <div className="header-seller-logo">
                    <img src={logo} alt="logo" width='350px' height='70px' />
                </div>
                <div className='seller-icon'>
                    <RiContactsLine />
                </div>

            </div>
        </header>
    );
};

export default HeaderSeller;
