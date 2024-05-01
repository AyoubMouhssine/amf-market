import React from "react";
import { useNavigate } from "react-router-dom";
import logout from "../../../lib/helpers/logout";
import { useDispatch } from "react-redux";

function SellerDropProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const authToken = sessionStorage.getItem("auth_token");
      if (!authToken) {
        return;
      }
      const response = await logout(dispatch, "vendeur", authToken);
      if (response.message === "success") {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ul className="dropdownsellerprofile">
        <li>
          <a href="/seller/profile">Profile</a>
        </li>
        <hr />
        <li>
          <a onClick={handleLogout}>Logout</a>
        </li>
      </ul>
    </div>
  );
}

export default SellerDropProfile;
