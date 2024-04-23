import { Outlet } from "react-router-dom";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import "./layout.css";
import Carousel from "../Carousel";
function index() {
  return (
    <>
      <div className="main">
        <Menu />
        <div className="content">
          <Carousel />
        </div>
      </div>
      <Outlet />
      <Footer />
      <Header />
    </>
  );
}

export default index;
