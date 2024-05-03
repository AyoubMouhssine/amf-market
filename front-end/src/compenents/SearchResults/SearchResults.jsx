import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Produit from "../Produit";
import Pagination from "../Pagination";
import {
  fetchProduits,
  fetchProduitsByCategorie,
  onPageChange,
} from "../../store/slices/produitsSlice";
import SearchNotFound from "../../pages/SearchNotFound/SearchNotFound";
import Menu from "../Menu";
const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const categorie = searchParams.get("categorie");
  const categorieId = searchParams.get("categorie_id");

  const { produits, isLoading, currentPage, totalPages, error } = useSelector(
    (state) => state.produits
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (categorieId) {
        await dispatch(fetchProduitsByCategorie(categorieId));
      } else {
        dispatch(fetchProduits({ page: 1, searchQuery }));
      }
    };

    fetchData();
  }, [dispatch, searchQuery, categorieId]);

  const handlePageChange = (newPage) => {
    dispatch(onPageChange(newPage));
    dispatch(fetchProduits({ page: newPage, searchQuery }));
  };

  return (
    <>
      <Header />
      <div style={{ minHeight: "100vh" }}>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div>Error: {error}</div>
        ) : produits.length !== 0 ? (
          <>
            <div style={{ display: categorieId && "flex" }}>
              {categorieId && <Menu categorieId={categorieId} />}
              <div
                className="produits-container container"
                style={{ marginTop: "90px", padding: "50px" }}
              >
                <div>
                  {searchQuery && <h3>Search Result Of : {searchQuery} </h3>}
                  {categorieId && categorie && (
                    <h3>Categorie : {categorie} </h3>
                  )}
                </div>
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
              </div>
            </div>
          </>
        ) : (
          <SearchNotFound searchQuery={searchQuery} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
