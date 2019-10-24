import axios from "axios";
import server from "./switchServers";

const axiosWithAuth = () => {
  const token = localStorage.getItem("key");

  return axios.create({
    headers: {
      Authorization: `Token ${token}`
    },
    baseURL: server.server
  });
};

export default axiosWithAuth;
