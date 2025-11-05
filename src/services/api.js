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
      throw error; // rethrow for caller to handle
    });
};

export const createProblem = (data) => {
  API.post("/problems", data)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      console.error("Error creating problem:", error);
      return error;
    });
};

export const getProblemById = (id) => API.get(`/problems/${id}`);

export const updateProblem = (id, data) => API.put(`/problems/${id}`, data);

export const deleteProblem = (id) => API.delete(`/problems/${id}`);
