import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const getReview = async (code) => {
  const response = await api.post("/review", { code });
  return response.data;
};