import logo from "../../images/logo1.png";
import "./header-admin.css";
import useCheckAuth from "../../../lib/helpers/useCheckAuth";
const HeaderAdmin = () => {
  const user = useCheckAuth("admin");

  return (
    <header className="header-seller">
      <div className="container-seller">
        <h2>
          {user?.nom} {user?.prenom}
        </h2>
        <div className="header-seller-logo">
          <img src={logo} alt="logo" width="350px" height="70px" />
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
