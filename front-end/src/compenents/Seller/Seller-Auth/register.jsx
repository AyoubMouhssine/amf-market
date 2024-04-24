import axios from "axios";
import React, { useState } from "react";
import "./seller.css";
import logo from "../../images/logo1.png";
import register from "../../../lib/helpers/register";
import { useNavigate } from "react-router-dom";

function RegisterSeller() {
  const [data, setData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    password_confirmation: "",
    tel: "",
    cin: "",
    adresse: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target["name"];
    const value = e.target["value"];
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register("vendeur", data);
      if (response.message === "success") {
        navigate("/vendeur/login");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return (
    <>
      <img src={logo} alt="logo" className="logo" />
      <div className="registe-seller ">
        <div className="link-register">
          <p>
            <a href="/user/register">Resgister as User</a>
          </p>
          <p>
            <a href="/vendeur/register" className="link-register-seller">
              Resgister as Seller
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} method="post" className="register-form">
          <div className="form-group">
            <label htmlFor="firstName" className="label-group">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="nom"
              required
              onChange={(e) => handleChange(e)}
              className="input-group"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="label-group">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="prenom"
              required
              onChange={(e) => handleChange(e)}
              className="input-group"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="label-group">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="tel"
              required
              onChange={(e) => handleChange(e)}
              className="input-group"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cin" className="label-group">
              CIN:
            </label>
            <input
              type="text"
              id="cin"
              name="cin"
              required
              onChange={(e) => handleChange(e)}
              className="input-group"
            />
          </div>
          <div className="form-group">
            <label htmlFor="adresse" className="label-group">
              Adresse:
            </label>
            <input
              type="text"
              id="address"
              name="adresse"
              required
              onChange={(e) => handleChange(e)}
              className="input-group"
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="password_confirmation" className="label-group">
              Confirmation:
            </label>
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              required
              onChange={(e) => handleChange(e)}
              className="input-group"
            />
          </div>

          <button type="submit" className="register-seller-botton">
            Register
          </button>
          <p>
            Do you have already an account? <a href="/vendeur/login">Login</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default RegisterSeller;
