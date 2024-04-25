import { axios } from "../axios";
import { clearCart } from "../../store/slices/cartSlice";

const logout = async (dispatch, userType, token) => {
  try {
    const res = await axios.post(
      `/${userType}/logout`,
      {},
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    sessionStorage.removeItem("auth_token");
    sessionStorage.removeItem("current_user");
    dispatch(clearCart());
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default logout;
