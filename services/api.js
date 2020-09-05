import axios from "axios";

const api = axios.create({
  baseURL: "https://ghibliapi.herokuapp.com",
});

export const getMovies = async () => api.get("/films");

export default api;
