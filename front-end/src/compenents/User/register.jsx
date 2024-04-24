import React, { useState } from "react";
import logo from "../images/logo1.png";
import "./user.css";
import { useNavigate } from "react-router-dom";
import register from "../../lib/helpers/register";

function RegisterUser() {
  const [data, setData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    password_confirmation: "",
    tel: "",
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
      const response = await register("user", data);
      if (response.message === "success") {
        navigate("/user/login");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };
  return (
    <>
      <img src={logo} alt="logo" className="logo" />

      <div className="registe-user ">
        <div className="link-register">
          <p>
            <a href="/user/register" className="link-register-user">
              Resgister as Uesr
            </a>
          </p>
          <p>
            <a href="/vendeur/register "> Resgister as Seller</a>
          </p>
        </div>
        <form method="post" onSubmit={handleSubmit}>
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
              className="input-user-group"
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
              className="input-user-group"
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
              className="input-user-group"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="label-group">
              Adresse:
            </label>
            <input
              type="text"
              id="address"
              name="adresse"
              required
              onChange={(e) => handleChange(e)}
              className="input-user-group"
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
              className="input-user-group"
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
              className="input-user-group"
            />
          </div>
          <div className="form-group">
            <label htmlFor="assword_confirmation" className="label-group">
              Confirmation:
            </label>
            <input
              type="password"
              id="assword_confirmation"
              name="password_confirmation"
              required
              onChange={(e) => handleChange(e)}
              className="input-user-group"
            />
          </div>
          <button type="submit" className="register-user-botton">
            Submit
          </button>
          <p>
            Do you have already an account? <a href="/user/login">Login</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default RegisterUser;
