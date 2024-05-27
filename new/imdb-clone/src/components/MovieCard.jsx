import React from "react";
import Watchlist from "./Watchlist";

function MovieCard({
  poster_path,
  name,
  handleAddWatchList,
  movieObj,
  handleRemoveWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[50vh] w-[180px] bg-center bg-cover rounded-xl hover:cursor-pointer duration-300 hover:scale-110 flex flex-wrap flex-col justify-between items-end "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        // backgroundImage: `url(${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveWatchList(movieObj)}
          className="h-8 w-8 m-4 flex justify-center items-center bg-gray-900/80 rounded-xl"
        >
          &#x274C;
        </div>
      ) : (
        <div
          onClick={() => handleAddWatchList(movieObj)}
          className="h-8 w-8 m-4 flex justify-center items-center bg-gray-900/80 rounded-xl"
        >
          &#128525;
        </div>
      )}
      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 rounded-b-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
