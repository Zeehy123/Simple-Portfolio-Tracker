import axios from "axios";

// Base URL for your Django backend
const BASE_URL = "http://127.0.0.1:8000/api/";

// Get the bearer token from localStorage (or other secure storage)
const getToken = () => {
  return localStorage.getItem("accessToken"); // Replace 'accessToken' with your actual token key
};

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token
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
