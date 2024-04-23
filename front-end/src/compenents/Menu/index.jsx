import React, { useEffect } from "react";
import "./menu.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/slices/categoriesSlice";
const Menu = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector(
    (state) => state.categories
  );
  const isLoadingProduits = useSelector((state) => state.produits.isLoading);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (isLoadingProduits) return;
  return (
    <menu className="menu">
      <ul className="dropdown-menu">
        {categories.map((categorie) => {
          return (
            <li key={categorie.id}>
              <a className="dropdown-item" href="#">
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
