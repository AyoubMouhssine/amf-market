import React, { useState } from "react";
import logo from "../../images/logo1.png";
import { useNavigate } from "react-router-dom";
import login from "../../../lib/helpers/login";
function LoginAdmin() {
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
      const response = await login("admin", data);
      if (response.message === "success") {
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <>
      <img src={logo} alt="logo" className="logo" />
      <div className="login-seller">
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
        </form>
      </div>
    </>
  );
}

export default LoginAdmin;
