import React, { useEffect } from "react";
import "./menu.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/slices/categoriesSlice";
import { fetchProduitsByCategorie } from "../../store/slices/produitsSlice";
import { useNavigate } from "react-router-dom";

const Menu = ({ categorieId }) => {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleCategoryClick = (categorieId, categorieNom) => {
    dispatch(fetchProduitsByCategorie(categorieId));
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("categorie_id", categorieId);
    searchParams.set("categorie", categorieNom);
    const newSearchQuery = searchParams.toString();

    navigate(`/products?${newSearchQuery}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <menu className="menu">
      <ul className="dropdown-menu">
        {categories.map((categorie) => {
          return (
            <li key={categorie.id}>
              <a
                style={{
                  color: categorieId == categorie.id ? "orange" : "white",
                }}
                className="dropdown-item"
                onClick={() => handleCategoryClick(categorie.id, categorie.nom)}
              >
                {categorie.nom}
              </a>
            </li>
          );
        })}
      </ul>
    </menu>
  );
};

export default Menu;
