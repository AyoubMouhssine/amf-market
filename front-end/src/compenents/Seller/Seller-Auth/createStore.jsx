import { axios } from "../../../lib/axios";
import React, { useState } from "react";
import "./seller.css";
import { useNavigate } from "react-router-dom";

function CreateStore() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append(
      "vendeur_vendeurId",
      JSON.parse(sessionStorage.getItem("current_user")).user.vendeurId
    );

    try {
      const response = await axios.post("/store/create", formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth_token")}`,
        },
      });

      if (response.status === 200 && response.statusText === "OK") {
        alert(response.data.success);
        navigate("/seller/dashboard");
      } else {
        alert(response.data.fail);
        e.target.reset();
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        alert("The store name has already been taken.");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="create-seller-store">
        <h2>Your store is one step away!</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleAdd} className="create-store-form">
          <div className="form-group">
            <label htmlFor="text" className="label-group">
              Store name :
            </label>
            <input
              type="text"
              id="storeName"
              name="nom_store"
              placeholder="Type the name of your store"
              required
              className="input-group"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="label-group">
              Store description :
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              cols="50"
              className="input-description"
            ></textarea>
          </div>

          <button type="submit" className="create-store-botton">
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateStore;
