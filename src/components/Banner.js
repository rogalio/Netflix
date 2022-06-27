import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixoriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div
      className="h-[448px] relative text-white object-contain "
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="flex flex-col mt-12 ml-[30px] pt-[140px] h-[190px] ">
        <h1 className="text-5xl font-extrabold pb-4">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
          <button
            className=" cursor-pointer bg-[rgba(51,51,51,0.5)] outline-none font-bold rounded py-1 px-8 mr-4 hover:text-[black] hover:bg-[white] hover:duration-500
           "
          >
            Play
          </button>
          <button className=" cursor-pointer bg-[rgba(51,51,51,0.5)]  outline-none font-bold rounded py-1 px-8 mr-4 hover:text-[black] hover:bg-[white] hover:duration-500">
            My List
          </button>
        </div>
        <h1 className="w-[45rem] leading-5 pt-4 text-base font-semibold max-w-[360px] h-[88px]">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="h-[7.4rem] mt-[140px]  bg-gradient-to-b from-[transparent]  to-[#111] " />
    </div>
  );
};

export default Banner;
