import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
  const [pageNo, setPageNo] = useState(1);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=6a930fef16d1373625057b0a1806ebb9&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, [pageNo]);

  const previusPage = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };
  const nextPage = () => {
    setPageNo(pageNo + 1);
  };

  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>
      <div className="flex flex-wrap flex-row justify-around gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
            />
          );
        })}
      </div>
      <Pagination
        curruntPage={pageNo}
        previusPage={previusPage}
        nextPage={nextPage}
      />
    </div>
  );
}

export default Movies;
// https://api.themoviedb.org/3/discover/movie?api_key=6a930fef16d1373625057b0a1806ebb9&language=en-US&page=2
