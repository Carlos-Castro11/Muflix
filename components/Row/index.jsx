import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/Row.module.css";
import axios from "../../pages/api/api";

export const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function FetchDataMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    FetchDataMovies();

    console.log(movies);
  }, [fetchUrl]);

  return (
    <div>
      <h1>salve</h1>
    </div>
  );
};
