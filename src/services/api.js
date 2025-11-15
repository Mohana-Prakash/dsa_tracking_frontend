import axios from "axios";

const API = axios.create({
  // baseURL: "https://dsatrackingbackend-production.up.railway.app/api",
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const API_WITHOUT_AUTH = axios.create({
  // baseURL: "https://dsatrackingbackend-production.up.railway.app/api",
  baseURL: "http://localhost:5000/api",
});

export const adminLogin = async (email) => {
  const response = await API_WITHOUT_AUTH.post("/auth/admin-login", { email });

  if (response?.data?.token) {
    localStorage.setItem("adminToken", response.data.token);
  }

  return response.data;
};

export const getProblems = (page = 1, size = 5, searchTerm = "") => {
  return API.get(`/problems?page=${page}&size=${size}&searchTerm=${searchTerm}`)
    .then((res) => res.data)
    .catch((err) => {
      console.error("Error fetching problems:", err);
      throw err;
    });
};

export const createProblem = async (data) => {
  const response = await API.post("/problems", data);
  return {
    message: "Problem created successfully",
    data: response.data,
    status: response.status,
  };
};

export const updateProblem = async (id, data) => {
  const response = await API.put(`/problems/${id}`, data);
  return {
    message: "Problem updated successfully",
    data: response.data,
    status: response.status,
  };
};

export const getProblemById = (id) => API.get(`/problems/${id}`);

export const deleteProblem = (id) => API.delete(`/problems/${id}`);

export default API;
