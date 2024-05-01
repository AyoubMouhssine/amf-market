import { Outlet } from "react-router-dom";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import "./layout.css";
import Carousel from "../Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchimages } from "../../store/slices/imagesSlice";
import { useEffect } from "react";
function index() {
  const { images } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchimages());
  }, [dispatch]);

  return (
    <>
      <div className="main">
        <Menu />
        <div className="content">
          <Carousel
            images={images}
            height={"490px"}
            withIndicator={false}
            time={3000}
          />
        </div>
      </div>
      <Outlet />
      <Footer />
      <Header />
    </>
  );
}

export default index;
