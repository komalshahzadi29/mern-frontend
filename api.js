import axios from "axios";

const BASE_URL = "http://localhost:5000/api/projects";

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 second timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// 1. Get all projects
export const fetchItems = async () => {
  try {
    const response = await api.get("/");
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error);
  }
};

// 2. Get single project by ID
export const fetchItemById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error);
  }
};

// 3. Add new project
export const addItem = async (itemData) => {
  try {
    const response = await api.post("/", itemData);
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error);
  }
};

// 4. Update project
export const updateItem = async (id, itemData) => {
  try {
    const response = await api.put(`/${id}`, itemData);
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error);
  }
};

// 5. Delete project
export const deleteItem = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error);
  }
};

// Error handling utility
const handleError = (error) => {
  console.error("API Error:", error);
  
  if (error.response) {
    // Server responded with error status (4xx/5xx)
    return { 
      success: false, 
      message: error.response.data.message || "Request failed",
      status: error.response.status
    };
  } else if (error.request) {
    // No response received
    return { 
      success: false, 
      message: "No response from server. Please check your connection."
    };
  } else {
    // Other errors
    return { 
      success: false, 
      message: error.message || "An unknown error occurred"
    };
  }
};

// Add request interceptor for auth tokens if needed
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});