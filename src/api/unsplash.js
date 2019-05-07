import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 462f03f6e5637ba11bff2417c303370964c342c0fbdfe68a5e2a07241f62ce04"
  }
});
