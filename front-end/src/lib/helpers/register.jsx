import { axios } from "../axios";

const register = async (userType, data) => {
  try {
    const res = await axios.post(
      `/${userType}/register`,
      {
        ...data,
      },
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default register;
