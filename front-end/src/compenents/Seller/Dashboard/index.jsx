import React from "react";
import AuthVendeur from "../../../lib/helpers/AuthVendeur";

function DashboardSeller() {
  const [vendeur, setVendeur] = AuthVendeur();
  console.log(vendeur);
  return (
    <div>
      <h2
        style={{ textAlign: "center", marginLeft: "150px", marginTop: "50px" }}
      >
        Welcome back {vendeur.nom} {vendeur.prenom}
      </h2>
    </div>
  );
}

export default DashboardSeller;
