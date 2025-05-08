import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://goal-project.onrender.com/goals",
});