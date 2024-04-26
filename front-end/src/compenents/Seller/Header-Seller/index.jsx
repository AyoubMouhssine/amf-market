import React from "react";
import logo from "../../images/logo1.png";
import { RiContactsLine } from "react-icons/ri";
import "./header-seller.css";
import useCheckAuth from "../../../lib/helpers/useCheckAuth";

const HeaderSeller = () => {
  const user = useCheckAuth("vendeur");

  return (
    <header className="header-seller">
      <div className="container-seller">
        <h2>
          {user?.nom} {user?.prenom}
        </h2>
        <div className="header-seller-logo">
          <img src={logo} alt="logo" width="350px" height="70px" />
        </div>
        <div className="seller-icon">
          <RiContactsLine />
        </div>
      </div>
    </header>
  );
};

export default HeaderSeller;
