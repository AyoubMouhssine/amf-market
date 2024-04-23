import axios from "axios";
import React, { useState } from "react";
import "./seller.css";
import logo from "../../images/logo1.png";
import { login } from "../../../lib/axios";
import { useNavigate } from "react-router-dom";

function LoginSeller() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target["name"];
    const value = e.target["value"];
    setData({ ...data, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login("vendeur", data);
      if (user) {
        navigate("/seller");
      }
      console.log("Authenticated user:", user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <>
      <img src={logo} alt="logo" className="logo" />
      <div className="login-seller ">
        <div className="link-register">
          <p>
            <a href="/user/login"> Login as Uesr</a>
          </p>
          <p>
            <a href="/vondeur/login" className="link-register-seller">
              Login as Seller
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} method="post" className="register-form">
          <div className="form-group">
            <label htmlFor="email" className="label-group">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => handleChange(e)}
              className="input-group"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label-group">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => handleChange(e)}
              className="input-group"
            />
          </div>

          <button type="submit" className="login-seller-botton">
            Login
          </button>
          <p>
            New in our platform ? <a href="/vondeur/register">Register</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default LoginSeller;
