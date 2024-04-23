import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 60000,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(null, (err) => {
  console.log(err);
});

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
  } catch (e) {
    console.log(e);
  }
};

const login = async (userType, data) => {
  try {
    const res = await axios.post(`/${userType}/login`, data, {
      withCredentials: true,
    });
    const token = res.data.data.token;
    const user = res.data.data[userType];
    sessionStorage.setItem("auth_token", token);
    // sessionStorage.setItem("user", JSON.stringify(user));
    return res.data.data[userType];
  } catch (e) {
    console.log(e);
  }
};

const isAuthenticated = () => {
  const token = sessionStorage.getItem("auth_token");
  return !!token;
};

export { axios, register, login, isAuthenticated };
