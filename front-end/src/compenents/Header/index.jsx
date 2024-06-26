import React, { useEffect, useState } from "react";
import logo from "../images/logo1.png";
import { GrCart } from "react-icons/gr";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import logout from "../../lib/helpers/logout";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduits } from "../../store/slices/produitsSlice";
import { setAuthStatus } from "../../store/slices/authSlice";
import { selectCartItemCount } from "../../store/slices/cartSlice";
import DropDownProfile from "../User/Dashboard-User/DropDownProfile";

const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const cartItemCount = useSelector(selectCartItemCount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const current_user = JSON.parse(sessionStorage.getItem("current_user"));
    if (current_user && current_user.userType === "user") {
      dispatch(setAuthStatus(true));
    }
  }, [dispatch]);

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const authToken = sessionStorage.getItem("auth_token");
      if (!authToken) {
        return;
      }
      const response = await logout(dispatch, "user", authToken);
      if (response.message === "success") {
        dispatch(setAuthStatus(false));
        // navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    if (searchQuery === "") {
      navigate("/");
      return;
    }
    dispatch(fetchProduits({ page: 1, searchQuery }));
    navigate(`/products?search_query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="header__search">
          <input
            type="text"
            placeholder="Search for the product by name"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>
            search
          </button>
        </div>

        <ul className="header__actions">
          {isAuthenticated ? (
            <li>
              <a href="#" onClick={() => setOpenProfile((prev) => !prev)}>My Account</a>
              {openProfile && <DropDownProfile handleLogout={handleLogout} />}
            </li>
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

          <li className="cart-item">
            <Link to="/order">
              <GrCart style={{ fontSize: "30px" }} /> &nbsp; Cart
              {cartItemCount > 0 && (
                <span className="cart-count">{cartItemCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
