// // import React, { useEffect, useState } from "react";
// // import useCheckAuth from "../../../lib/helpers/useCheckAuth";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   fetchProductsForStore,
// //   fetchStores,
// //   selectAllStores,
// //   selectSelectedStoreProducts,
// // } from "../../../store/slices/storesSlice";
// // import "./dashboard.css";

// // function DashboardSeller() {
// //   useCheckAuth("vendeur");
// //   const dispatch = useDispatch();
// //   const stores = useSelector(selectAllStores);
// //   const products = useSelector(selectSelectedStoreProducts);
// //   const [selectedStoreId, setSelectedStoreId] = useState(null);
// //   const [loading, setLoading] = useState(false); // Add loading state
// //   const vendeurId = JSON.parse(sessionStorage.getItem("current_user")).user
// //     .vendeurId;

// //   useEffect(() => {
// //     dispatch(fetchStores(vendeurId));
// //   }, [dispatch, vendeurId]);

// //   const handleStoreClick = async (storeId) => {
// //     setSelectedStoreId(storeId);
// //     setLoading(true);
// //     await dispatch(fetchProductsForStore(storeId));
// //     setLoading(false);
// //   };

// //   const handleDeleteStore = (storeId) => {
// //     console.log(storeId);
// //     dispatch(deleteStore(storeId));
// //     setSelectedStoreId(null);
// //   };
// //   return (
// //     <div className="dashboard">
// //       <h2>All Stores</h2>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Store ID</th>
// //             <th>Store Name</th>
// //             <th>Description</th>
// //             <th></th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {stores.map((store) => (
// //             <tr
// //               key={store.storeId}
// //               className={selectedStoreId === store.storeId ? "selected" : ""}
// //             >
// //               <td>{store.storeId}</td>
// //               <td>{store.nom_store}</td>
// //               <td>{store.description}</td>
// //               <td>
// //                 <button
// //                   type="button"
// //                   onClick={() => handleStoreClick(store.storeId)}
// //                 >
// //                   Select
// //                 </button>
// //                 <button
// //                   type="button"
// //                   onClick={() => handleDeleteStore(store.storeId)}
// //                 >
// //                   Delete
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       {products.length > 0 ? (
// //         <>
// //           <h2>Products</h2>
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Product ID</th>
// //                 <th>Image</th>
// //                 <th>Product Name</th>
// //                 <th>Price</th>
// //                 <th>Description</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {products.map((product) => (
// //                 <tr key={product.id}>
// //                   <td>{product.id}</td>
// //                   <td>
// //                     <img
// //                       src={
// //                         product.medias[
// //                           Math.floor(Math.random() * product.medias.length)
// //                         ].image
// //                       }
// //                     />
// //                   </td>
// //                   <td>{product.nom}</td>
// //                   <td>{product.prix}</td>
// //                   <td>{product.description}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </>
// //       ) : (
// //         <h2 style={{ textAlign: "center" }}>
// //           Selectionner votre store pour afficher les produits
// //         </h2>
// //       )}
// //     </div>
// //   );
// // }

// // export default DashboardSeller;

// import React, { useEffect, useState } from "react";
// import useCheckAuth from "../../../lib/helpers/useCheckAuth";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchProductsForStore,
//   fetchStores,
//   selectAllStores,
//   selectSelectedStoreProducts,
//   deleteStore, // Import the deleteStore action
// } from "../../../store/slices/storesSlice";
// import "./dashboard.css";

// function DashboardSeller() {
//   useCheckAuth("vendeur");
//   const dispatch = useDispatch();
//   const stores = useSelector(selectAllStores);
//   const products = useSelector(selectSelectedStoreProducts);
//   const [selectedStoreId, setSelectedStoreId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const vendeurId = JSON.parse(sessionStorage.getItem("current_user")).user
//     .vendeurId;

//   useEffect(() => {
//     dispatch(fetchStores(vendeurId));
//   }, [dispatch, vendeurId]);

//   const handleStoreClick = async (storeId) => {
//     setSelectedStoreId(storeId);
//     setLoading(true);
//     await dispatch(fetchProductsForStore(storeId));
//     setLoading(false);
//   };

//   const handleDeleteStore = async (storeId) => {
//     setLoading(true);
//     await dispatch(deleteStore(storeId));
//     setLoading(false);
//   };

//   return (
//     <div className="dashboard">
//       <h2>All Stores</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Store ID</th>
//             <th>Store Name</th>
//             <th>Description</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {stores.map((store) => (
//             <tr
//               key={store.storeId}
//               className={selectedStoreId === store.storeId ? "selected" : ""}
//             >
//               <td>{store.storeId}</td>
//               <td>{store.nom_store}</td>
//               <td>{store.description}</td>
//               <td>
//                 <button
//                   type="button"
//                   onClick={() => handleStoreClick(store.storeId)}
//                 >
//                   Select
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => handleDeleteStore(store.storeId)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {products.length > 0 ? (
//         <>
//           <h2>Products</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Product ID</th>
//                 <th>Image</th>
//                 <th>Product Name</th>
//                 <th>Price</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product.id}>
//                   <td>{product.id}</td>
//                   <td>
//                     <img
//                       src={
//                         product.medias[
//                           Math.floor(Math.random() * product.medias.length)
//                         ].image
//                       }
//                     />
//                   </td>
//                   <td>{product.nom}</td>
//                   <td>{product.prix}</td>
//                   <td>{product.description}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       ) : (
//         <h2 style={{ textAlign: "center" }}>
//           Select a store to display products
//         </h2>
//       )}
//     </div>
//   );
// }

// export default DashboardSeller;

import React, { useEffect, useState } from "react";
import useCheckAuth from "../../../lib/helpers/useCheckAuth";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsForStore,
  fetchStores,
  selectAllStores,
  selectSelectedStoreProducts,
  deleteStore,
} from "../../../store/slices/storesSlice";
import "./dashboard.css";

function DashboardSeller() {
  useCheckAuth("vendeur");
  const dispatch = useDispatch();
  const stores = useSelector(selectAllStores);
  const products = useSelector(selectSelectedStoreProducts);
  const [selectedStoreId, setSelectedStoreId] = useState(null);
  const [loading, setLoading] = useState(false);
  const vendeurId = JSON.parse(sessionStorage.getItem("current_user")).user
    .vendeurId;

  useEffect(() => {
    dispatch(fetchStores(vendeurId));
  }, [dispatch, vendeurId]);

  const handleStoreClick = async (storeId) => {
    setSelectedStoreId(storeId);
    setLoading(true);
    await dispatch(fetchProductsForStore(storeId));
    setLoading(false);
  };

  const handleDeleteStore = async (storeId) => {
    setLoading(true);
    await dispatch(deleteStore(storeId));
    setLoading(false);
  };

  return (
    <div className="dashboard">
      <h2>All Stores</h2>
      {stores.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>Créez d'abord un magasin</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Store ID</th>
              <th>Store Name</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store) => (
              <tr
                key={store.storeId}
                className={selectedStoreId === store.storeId ? "selected" : ""}
              >
                <td>{store.storeId}</td>
                <td>{store.nom_store}</td>
                <td>{store.description}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleStoreClick(store.storeId)}
                  >
                    Select
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteStore(store.storeId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {stores.length > 0 &&
        products.length === 0 &&
        selectedStoreId !== null && (
          <h2 style={{ textAlign: "center" }}>
            Aucun produit n'est disponible dans ce magasin pour le moment
          </h2>
        )}

      {products.length > 0 && (
        <>
          <h2>Products</h2>
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    <img
                      src={
                        product.medias[
                          Math.floor(Math.random() * product.medias.length)
                        ].image
                      }
                    />
                  </td>
                  <td>{product.nom}</td>
                  <td>{product.prix}</td>
                  <td>{product.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default DashboardSeller;
