import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegSave } from "react-icons/fa";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../store/slices/categoriesSlice";
import { axios } from "../../../lib/axios";
import useCheckAuth from "../../../lib/helpers/useCheckAuth";
import { useNavigate } from "react-router-dom";
import {
  fetchStores,
  selectAllStores,
} from "../../../store/slices/storesSlice";
function CreateProduct() {
  useCheckAuth("vendeur");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.categories);
  const vendeurId = JSON.parse(sessionStorage.getItem("current_user")).user
    .vendeurId;
  useEffect(() => {
    dispatch(fetchStores(vendeurId));
    dispatch(fetchCategories());
  }, [dispatch]);

  const stores = useSelector(selectAllStores);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("vendeur_vendeurId", vendeurId);
    try {
      const response = await axios.post("/produits", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if ((response.status === 200, response.statusText === "OK")) {
        alert(response.data.success);
        navigate("/seller/dashboard");
      } else {
        alert(response.data.fail);
        event.target.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2 className="createproduct">Create product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="product-info">
          <div className="form-group">
            <label htmlFor="name" className="label-product-group">
              Product name:
              <input
                type="text"
                name="nom"
                id="name"
                placeholder="   Name (Ex: Blue summer shirt..)"
                className="input-product-group"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="description" className="label-product-description">
              Description product:
              <textarea
                name="description"
                id="description"
                cols="500"
                placeholder="  type something"
                className="input-product-description"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <div className="quantity">
              <label htmlFor="quantity" className="label-product-group">
                Quantity:
                <input
                  name="stock"
                  type="number"
                  id="quantity"
                  min="0"
                  className="input-product-group"
                  required
                />
              </label>
              <label htmlFor="price" className="label-product-group">
                Price:
                <input
                  name="prix"
                  type="text"
                  id="price"
                  min="0"
                  className="input-product-group"
                  required
                />
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="label-product-group">Store :</label>
            <select
              name="store_storeId"
              id="store_storeId"
              className="input-product-group"
            >
              <option>choise votre store</option>
              {stores.map((store, i) => {
                return (
                  <option value={store.storeId} key={store.storeId}>
                    {store.nom_store}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label className="label-product-group">Categorie :</label>
            <select
              name="categorie_categorieId"
              id="product-category"
              className="input-product-group"
            >
              <option>choise votre categorie</option>
              {categories.map((e, i) => {
                return (
                  <option value={e.id} key={e.id}>
                    {e.nom}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="image-info">
          <div className="image-group">
            <label htmlFor="images" className="label-image">
              Images
            </label>
            <input
              name="images[]"
              type="file"
              id="images"
              className="input-image"
              multiple
              accept="image/*"
            />

            <hr />
          </div>
        </div>
        <footer className="footer-seller">
          <button>
            <FaRegSave />
            <span> Save</span>
          </button>
        </footer>
      </form>
    </>
  );
}

export default CreateProduct;
