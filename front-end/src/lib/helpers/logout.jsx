import { axios } from "../axios";
const logout = async (userType, token) => {
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
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default logout;
