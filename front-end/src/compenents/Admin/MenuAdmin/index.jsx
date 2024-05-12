import React from "react";
import "./menu-admin.css";
import { useNavigate } from "react-router-dom";
import logout from "../../../lib/helpers/logout";
import { useDispatch } from "react-redux";
const MenuAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const authToken = sessionStorage.getItem("auth_token");
      if (!authToken) {
        return;
      }
      const response = await logout(dispatch, "admin", authToken);
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
          <a
            className="dropdown-item-seller"
            href="/admin/dashboard/statistics"
          >
            Statistics
          </a>
        </li>
        <li>
          <a
            className="dropdown-item-seller"
            href="/admin/dashboard/categories"
          >
            Categories
          </a>
        </li>
        <li>
          <a className="dropdown-item-seller" href="/admin/dashboard/vendeurs">
            Vendeurs
          </a>
        </li>
        <li>
          <a className="dropdown-item-seller" href="#" onClick={handleLogout}>
            logout
          </a>
        </li>
      </ul>
    </menu>
  );
};

export default MenuAdmin;
