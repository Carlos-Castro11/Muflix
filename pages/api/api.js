// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
