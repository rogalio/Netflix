import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../App.css";

const Row = ({ title, fetchURL, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="text-white ml-[20px] ">
      <h2 className=" font-semibold">{title}</h2>
      <div className=" row__posters flex overflow-y-hidden overflow-x-scroll p-[20px]">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                key={movie.id}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
