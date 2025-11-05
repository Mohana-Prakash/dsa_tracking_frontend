import axios from "axios";
const API = axios.create({
  // baseURL: "http://localhost:5000/api",
  // baseURL: "https://dsa-tracking-backend.onrender.com/api",
  baseURL: "https://dsatrackingbackend-production.up.railway.app/api",
});

export const getProblems = (page = 1, size = 5, searchTerm = "") => {
  return API.get(`/problems?page=${page}&size=${size}&searchTerm=${searchTerm}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching problems:", error);
      throw error;
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
