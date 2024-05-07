import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ajouterCategorie,
  deleteCategorie,
  fetchCategories,
} from "../../../store/slices/categoriesSlice";
import { axios } from "../../../lib/axios";
import "./categories.css";
const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const { categories } = useSelector((state) => state.categories);

  const handleDelete = async (id) => {
    dispatch(deleteCategorie(id));
    if (confirm("voulez-vous vraiment supprimer cette categorie ?")) {
      await axios.delete(`/categories/${id}`);
    }
  };

  const handleAjoute = async (e) => {
    e.preventDefault();
    const nom = e.target["nom"].value;
    const response = await axios.post(`/categories`, {
      nom,
    });
    if (response) {
      if (response.status === 200 && response.statusText === "OK") {
        alert(response.data.message);
        dispatch(ajouterCategorie(nom));
        e.target.reset();
      }
    }
  };

  return (
    <div className="categories">
      <div>
        <h3>All Categories:</h3>
        <table>
          <thead>
            <tr>
              <th>Nom Categorie</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((categorie) => (
                <tr key={categorie.id}>
                  <td>{categorie.nom}</td>
                  <td>
                    <button onClick={() => handleDelete(categorie.id)}>
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3>Ajouter Categorie</h3>
        <form onSubmit={handleAjoute}>
          <div className="">
            <label htmlFor="nom">Nom Categorie</label>
            <input type="text" id="nom" name="nom" />
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default Categories;
