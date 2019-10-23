import axios from "axios";

const testServer = "https://lambda-mud-test.herokuapp.com";

const realServer = "http://mud18-app.herokuapp.com";

const axiosWithAuth = () => {
  const token = localStorage.getItem("key");

  return axios.create({
    headers: {
      Authorization: `Token ${token}`
    },
    baseURL: testServer
  });
};

export default axiosWithAuth;
