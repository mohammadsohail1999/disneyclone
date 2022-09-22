import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  //   timeout: 10000,
  //   //   headers: { "X-Custom-Header": "foobar" },
  //   timeoutErrorMessage: "request has been timeout",
});
