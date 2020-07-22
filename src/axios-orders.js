import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-64d3d.firebaseio.com/",
});


export default instance;