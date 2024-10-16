import axios from "axios";

const api = axios.create({
  baseUrl: "http://poweruptech.app:8080",
});

api.interceptors.request.use(async (config) => {
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9";

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});
export const getIscUrl = () => `${api.defaults.baseURL}/api/get_isc`;
export default api;
