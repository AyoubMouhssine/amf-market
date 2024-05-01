import React from "react";
// import './UserProfile.css'
import useCheckAuth from "../../../lib/helpers/useCheckAuth";
import { useNavigate } from "react-router-dom";
import HeaderSeller from "../Header-Seller";

function SellerProfile() {
  const vendeur = useCheckAuth("vendeur");
  const navigate = useNavigate();
  return (
    <>
      <HeaderSeller />

      <div className="user-information">
        <h2 className="user-info-h2">Seller Information</h2>

        <ul className="list-info-user">
          <li>
            <h2>
              E-mail address:<span>{vendeur.email}</span>{" "}
            </h2>
          </li>
          <li>
            <h2>
              First Name: <span>{vendeur.nom}</span>
            </h2>
          </li>
          <li>
            <h2>
              Last Name: <span>{vendeur.prenom}</span>
            </h2>
          </li>
          <li>
            <h2>
              Phone Number: <span>{vendeur.tel}</span>
            </h2>
          </li>
          <li>
            <h2>
              CIN: <span>{vendeur.cin}</span>
            </h2>
          </li>
          <li>
            <h2>
              Adress: <span>{vendeur.adresse}</span>
            </h2>
          </li>
        </ul>
        <button
          className="btn-edit"
          onClick={() => navigate("/seller/profile/edit")}
        >
          Edit
        </button>
      </div>
    </>
  );
}

export default SellerProfile;
