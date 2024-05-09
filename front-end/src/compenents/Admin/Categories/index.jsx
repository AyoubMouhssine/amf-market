import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ajouterCategorie,
  deleteCategorie,
  fetchCategories,
  updateCategorie,
} from "../../../store/slices/categoriesSlice";
import { axios } from "../../../lib/axios";
import "./categories.css";
const Categories = () => {
  const [updateMode, setUpdateMode] = useState(0);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nom = e.target["nom"].value;
    if (updateMode === 0) {
      const response = await axios.post(`/categories`, {
        nom,
      });
      if (response) {
        if (response.status === 200 && response.statusText === "OK") {
          alert(response.data.message);
          dispatch(ajouterCategorie(nom));
        }
      }
    } else {
      const response = await axios.put(`/categories/${updateMode}`, { nom });
      if (response) {
        if (response.status === 200 && response.statusText === "OK") {
          alert(response.data.message);
          dispatch(updateCategorie({ id: updateMode, nom }));
          setUpdateMode(0);
        }
      }
    }

    e.target.reset();
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
                    <button onClick={() => setUpdateMode(categorie.id)}>
                      update
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3>Ajouter Categorie</h3>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="nom">Nom Categorie</label>
            <input
              type="text"
              id="nom"
              name="nom"
              defaultValue={
                updateMode > 0
                  ? categories.find((categorie) => categorie.id == updateMode)
                      .nom
                  : ""
              }
            />
          </div>
          <button type="submit">{updateMode > 0 ? "Update" : "Ajouter"}</button>
        </form>
      </div>
    </div>
  );
};

export default Categories;
