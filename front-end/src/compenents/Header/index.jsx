import React, { useEffect, useState } from "react";
import logo from "../images/logo1.png";
import { GrCart } from "react-icons/gr";
import "./header.css";
import { useNavigate } from "react-router-dom";
import logout from "../../lib/helpers/logout";

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const current_user = JSON.parse(sessionStorage.getItem("current_user"));
    if (current_user && current_user.userType === "user") setIsAuth(true);
  }, [isAuth]);

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const authToken = sessionStorage.getItem("auth_token");
      if (!authToken) {
        return;
      }
      const response = await logout("user", authToken);
      if (response.message === "success") {
        setIsAuth(false);
        // navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="header__search">
          <input type="text" placeholder="Search for the product by name" />
          <button type="button">search</button>
        </div>
        <ul className="header__actions">
          {isAuth ? (
            <>
              <h3>My Account</h3>
              <li>
                <a onClick={handleLogout}>logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/user/login">Login</a>
              </li>
              <li>
                <a href="/user/register">Register</a>
              </li>
            </>
          )}
          <li>
            <a href="#">
              {" "}
              <GrCart style={{ fontSize: "30px" }} /> &nbsp; Cart
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
