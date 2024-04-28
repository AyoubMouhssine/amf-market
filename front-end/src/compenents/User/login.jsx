import React, { useState } from "react";
import logo from "../images/logo1.png";
import "./user.css";
import login from "../../lib/helpers/login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthStatus } from "../../store/slices/authSlice";

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!email.trim()) {
      validationErrors.email = "Email is required.";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required.";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await login("user", { email, password });

        if (response.message === "success") {
          dispatch(setAuthStatus(true));
          navigate("/");
        }
      } catch (error) {
        console.error("Login failed:", error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
      }
    }
  };

  return (
    <>
      <img src={logo} alt="logo" className="logo" />

      <div className="login-user ">
        <div className="link-register">
          <p>
            <a href="/user/login" className="link-register-user">
              Login as User
            </a>
          </p>
          <p>
            <a href="/vendeur/login "> Login as Seller</a>
          </p>
        </div>
        {errorMessage && (
          <div className="error-message general-message">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="label-group">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input-group"
            />
            {errors.email && (
              <div className="error-message email-error-message">
                {errors.email}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label-group">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input-group"
            />
            {errors.password && (
              <div className="error-message password-error-message">
                {errors.password}
              </div>
            )}
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
