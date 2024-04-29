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

const isAuthenticated = () => {
  const token = sessionStorage.getItem("auth_token");
  const currentUser = JSON.parse(sessionStorage.getItem("current_user"));

  return { token, currentUser };
};

export { axios, isAuthenticated };
