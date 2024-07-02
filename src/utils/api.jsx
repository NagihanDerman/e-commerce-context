import axios from "axios";
//axios ayarlarini biizm belirledigimiz ornegini olusturma
const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
});
export default api;
