import React from "react";
import "./menu-seller.css";
import { useNavigate } from "react-router-dom";
import logout from "../../../lib/helpers/logout";
import { useDispatch } from "react-redux";
const MenuSeller = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const authToken = sessionStorage.getItem("auth_token");
      if (!authToken) {
        return;
      }
      const response = await logout(dispatch, "vendeur", authToken);
      if (response.message === "success") {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <menu className="menu-seller">
      <ul className="dropdown-menu-seller">
        <li>
          <a className="dropdown-item-seller" href="/seller/dashboard">
            Dashboard
          </a>
        </li>

        <li>
          <a className="dropdown-item-seller" href="/seller/createproduct">
            New Product
          </a>
        </li>
        <li>
          <a className="dropdown-item-seller" href="/seller/createstore">
            Create Store
          </a>
        </li>
        <li>
          <a className="dropdown-item-seller" onClick={handleLogout}>
            logout
          </a>
        </li>
      </ul>
    </menu>
  );
};

export default MenuSeller;
