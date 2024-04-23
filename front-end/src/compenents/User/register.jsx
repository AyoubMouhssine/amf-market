import React, { useState } from "react";
import logo from "../images/logo1.png";
import "./user.css";

function RegisterUser({ getData }) {
  const [data, setData] = useState(getData);
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [tel, settel] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    getData({ nom, prenom, tel, address, email, password });
  };
  return (
    <>
      <img src={logo} alt="logo" className="logo" />

      <div className="registe-user ">
        <div className="link-register">
          <p>
            <a href="/user/register" className="link-register-user">
              {" "}
              Resgister as Uesr
            </a>
          </p>
          <p>
            <a href="/vondeur/register "> Resgister as Seller</a>
          </p>
        </div>
        <form action="/register" method="post" onSubmit={handleAdd}>
          <div class="form-group">
            <label for="firstName" className="label-group">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              onChange={(e) => setnom(e.target.value)}
              className="input-user-group"
            />
          </div>
          <div class="form-group">
            <label for="lastName" className="label-group">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              onChange={(e) => setprenom(e.target.value)}
              className="input-user-group"
            />
          </div>
          <div class="form-group">
            <label for="phone" className="label-group">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              onChange={(e) => settel(e.target.value)}
              className="input-user-group"
            />
          </div>
          <div class="form-group">
            <label for="address" className="label-group">
              Adresse:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              onChange={(e) => setaddress(e.target.value)}
              className="input-user-group"
            />
          </div>
          <div class="form-group">
            <label for="email" className="label-group">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setemail(e.target.value)}
              className="input-user-group"
            />
          </div>
          <div class="form-group">
            <label for="password" className="label-group">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setpassword(e.target.value)}
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
