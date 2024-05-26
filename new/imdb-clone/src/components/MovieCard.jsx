import React from "react";

function MovieCard({poster_path,name}) {
  return (
    <div
      className="h-[50vh] w-[180px] bg-center bg-cover rounded-xl hover:cursor-pointer duration-300 hover:scale-110 flex flex-wrap flex-row justify-between items-end "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 rounded-b-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
