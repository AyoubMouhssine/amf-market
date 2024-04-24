import useCheckAuth from "../../../lib/helpers/useCheckAuth";

function DashboardSeller() {
  const user = useCheckAuth("vendeur");

  return (
    <div>
      <h2
        style={{ textAlign: "center", marginLeft: "150px", marginTop: "50px" }}
      >
        Welcome back {user?.nom} {user?.prenom}
      </h2>
    </div>
  );
}

export default DashboardSeller;
