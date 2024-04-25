import React, { useState } from "react";
import logo from "../images/logo1.png";
import "./user.css";
import login from "../../lib/helpers/login";
import { useNavigate } from "react-router-dom";

function LoginUser() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login("user", {
        email,
        password,
      });

      if (response.message === "success") {
        navigate(-1);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <>
      <img src={logo} alt="logo" className="logo" />

      <div className="login-user ">
        <div className="link-register">
          <p>
            <a href="/user/login" className="link-register-user">
              {" "}
              Login as User
            </a>
          </p>
          <p>
            <a href="/vendeur/login "> Login as Seller</a>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="label-group">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setemail(e.target.value)}
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
              onChange={(e) => setpassword(e.target.value)}
              className="input-group"
            />
          </div>
          <button type="submit" className="login-user-botton">
            Login
          </button>
          <p>
            New in our platform ? <a href="/user/register">Register</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default LoginUser;
