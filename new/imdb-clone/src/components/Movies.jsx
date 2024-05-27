import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({ handleAddWatchList, handleRemoveWatchList, watchlist }) {
  const [pageNo, setPageNo] = useState(1);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // axios.get(`https://imdb-top-100-movies.p.rapidapi.com/?rapidapi-key=44d3d47da4msh191092b5ec95b50p128030jsnad728f4a1483&query=Inception`)
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
        {movies.map((movieObj, index) => {
          return (
            <MovieCard
              key={movieObj.id}
              poster_path={movieObj.backdrop_path}
              name={movieObj.title}
              movieObj={movieObj}
              handleAddWatchList={handleAddWatchList}
              handleRemoveWatchList={handleRemoveWatchList}
              watchlist={watchlist}
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
