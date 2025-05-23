import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getAllBlogs = async () => {
  const res = await axios.get(`${API_URL}/blogs`);
  return res.data;
};
