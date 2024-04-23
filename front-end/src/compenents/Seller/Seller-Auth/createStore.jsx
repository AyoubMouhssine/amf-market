import axios from "axios";
import React, { useState } from "react";
import "./seller.css";
import logo from "../../images/logo1.png";

function CreateStore() {
  const [data, setData] = useState({
    storeName: "",
    description: "",
  });

  const handleChange = (e) => {
    const name = e.target["name"];
    const value = e.target["value"];
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <img src={logo} alt="logo" className="logo" />
      <div className="create-seller-store ">
        <h2>Your store is one step away!</h2>
        <form
          action="/login"
          method="post"
          onSubmit={handleAdd}
          className="create-store-form"
        >
          <div className="form-group">
            <label for="text" className="label-group">
              Store name :
            </label>
            <input
              type="text"
              id="storeName"
              name="storeName"
              placeholder="Type the name of your store"
              required
              onChange={(e) => handleChange(e)}
              className="input-group"
            />
          </div>
          <div className="form-group">
            <label for="description" className="label-group">
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
