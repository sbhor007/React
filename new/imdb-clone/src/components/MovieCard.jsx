import React from "react";

function MovieCard() {
  return (
    <div
      className="h-[40vh] w-[190px] bg-center bg-cover rounded-xl hover:cursor-pointer duration-300 hover:scale-110 flex flex-wrap flex-row justify-between items-end "
      style={{
        backgroundImage: `url(https://wallpapercave.com/dwp1x/wp8116312.jpg)`,
      }}
    ></div>
  );
}

export default MovieCard;
