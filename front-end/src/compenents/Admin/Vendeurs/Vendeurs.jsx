import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteVendeur,
  fetchVendeurs,
} from "../../../store/slices/vendeurSlice";
import "./vendeur.css";
import { axios } from "../../../lib/axios";
const Vendeurs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVendeurs());
  }, []);

  const handleDelete = async (id) => {
    dispatch(deleteVendeur(id));
    if (confirm("voulez-vous vraiment supprimer ce vendeur ?")) {
      await axios.delete(`/vendeurs/${id}`);
    }
  };

  const { vendeurs } = useSelector((state) => state.vendeurs);

  return (
    <div>
      <h3>Liste des Vendeurs</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Cin</th>
            <th>Adresse</th>
            <th>Email</th>
            <th>Telephone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {vendeurs &&
            vendeurs.map((vendeur) => {
              return (
                <tr key={vendeur.vendeurId}>
                  <td>{vendeur.vendeurId}</td>
                  <td>{vendeur.nom}</td>
                  <td>{vendeur.prenom}</td>
                  <td>{vendeur.cin}</td>
                  <td>{vendeur.adresse}</td>
                  <td>{vendeur.email}</td>
                  <td>{vendeur.tel}</td>
                  <td>
                    <button onClick={() => handleDelete(vendeur.vendeurId)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Vendeurs;
