import axios from "axios";
import React, { useState } from "react";
import "./seller.css";
import logo from "../../images/logo1.png";

function RegisterSeller() {
  const [data, setData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    tel: "",
    cin: "",
    adresse: "",
  });

  const handleChange = (e) => {
    const name = e.target["name"];
    const value = e.target["value"];
    setData({ ...data, [name]: value });
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
            <a href="/vondeur/register" className="link-register-seller">
              Resgister as Seller
            </a>
          </p>
        </div>
        <form action="/register" method="post" className="register-form">
          <div className="form-group">
            <label for="firstName" className="label-group">
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
            <label for="lastName" className="label-group">
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
            <label for="phone" className="label-group">
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
            <label for="cin" className="label-group">
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
            <label for="adresse" className="label-group">
              Adresse:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              onChange={(e) => handleChange(e)}
              className="input-group"
            />
          </div>
          <div className="form-group">
            <label for="email" className="label-group">
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
            <label for="password" className="label-group">
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

          <button type="submit" className="register-seller-botton">
            <a href="/vondeur/create/store">Next</a>
          </button>
          <p>
            Do you have already an account? <a href="/vondeur/login">Login</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default RegisterSeller;
