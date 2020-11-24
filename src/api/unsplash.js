import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID te4NLA169Q9jd485V0DaBkfZtcsICVqbVfVNBgiRTvI",
  },
});
