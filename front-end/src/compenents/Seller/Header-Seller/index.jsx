import React, { useState } from "react";
import logo from "../../images/logo1.png";
import { RiContactsLine } from "react-icons/ri";
import "./header-seller.css";
import useCheckAuth from "../../../lib/helpers/useCheckAuth";
import SellerDropProfile from "./SellerDropProfile";

const HeaderSeller = () => {
  const [openProfile, setOpenProfile] = useState(false);

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
          <RiContactsLine onClick={() => setOpenProfile((prev) => !prev)} />
          {openProfile && <SellerDropProfile />}
        </div>
      </div>
    </header>
  );
};

export default HeaderSeller;
