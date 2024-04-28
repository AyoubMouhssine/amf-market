import { axios } from "../axios";

const login = async (userType, data) => {
  try {
    const res = await axios.post(`/${userType}/login`, data, {
      withCredentials: true,
    });
    const token = res.data.data.token;
    const user = res.data.data[userType];
    sessionStorage.setItem("auth_token", token);
    sessionStorage.setItem(
      "current_user",
      JSON.stringify({
        userType: userType,
        user,
      })
    );

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default login;
