import React from "react";
import { Link } from "react-router-dom";
import "./searchnotfound.css";
const SearchNotFound = ({ searchQuery }) => {
  return (
    <div className="search-not-found">
      <h2>Aucun produit trouvé pour "{searchQuery}"</h2>
      <p>Veuillez essayer un autre terme de recherche.</p>
      <Link to="/" className="btn">
        Retour à la page d'accueil
      </Link>
    </div>
  );
};

export default SearchNotFound;
