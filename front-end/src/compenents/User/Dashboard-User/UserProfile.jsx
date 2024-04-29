import React, { useEffect, useState } from "react";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import "./UserProfile.css";
import useCheckAuth from "../../../lib/helpers/useCheckAuth";
import { useNavigate } from "react-router-dom";


function UserProfile() {
  const user = useCheckAuth("user");
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="user-information">
        <h2 className="user-info-h2">User Information</h2>

        <ul className="list-info-user">
          <li>
            <h2>
              E-mail address:<span>{user.email}</span>{" "}
            </h2>
          </li>
          <li>
            <h2>
              First Name: <span>{user.nom}</span>
            </h2>
          </li>
          <li>
            <h2>
              Last Name: <span>{user.prenom}</span>
            </h2>
          </li>
          <li>
            <h2>
              Phone Number: <span>{user.tel}</span>
            </h2>
          </li>
          <li>
            <h2>
              Adress: <span>{user.adresse}</span>
            </h2>
          </li>
        </ul>
        <button
          className="btn-edit"
          onClick={() => navigate("/user/profile/edit")}
        >
          Edit
        </button>
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;
