import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduits, onPageChange } from "../store/slices/produitsSlice";
import Produit from "../compenents/Produit";
import Loader from "../compenents/Loader";
import "./produits.css";
import Pagination from "../compenents/Pagination";
import exempleImage from "../compenents/images/photo4.jpg";
const Produits = () => {
  const dispatch = useDispatch();
  const { produits, currentPage, totalPages, isLoading, error } = useSelector(
    (state) => state.produits
  );

  useEffect(() => {
    dispatch(fetchProduits({ page: 1, searchQuery: "" }));
  }, [dispatch]);

  const handlePageChange = (newPage) => {
    dispatch(onPageChange(newPage));
    dispatch(fetchProduits({ page: newPage, searchQuery: "" }));
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="produits-page">
          <div className="produits-container container">
            {produits.map((produit) => (
              <Produit
                key={produit.id}
                images={produit.medias}
                description="none"
                title={produit.nom}
                price={produit.prix}
                link={`/product/${produit.id}/detail/`}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Produits;
