import axios from "axios";
import BASE_URL from "../api/config";

const getToken = () => {
  return localStorage.getItem("accessToken");
};

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor (  for refreshing tokens)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token expiration or other errors here
    if (error.response?.status === 401) {
      // For example, redirect to login or refresh the token
      console.error("Unauthorized! Redirecting to login.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
