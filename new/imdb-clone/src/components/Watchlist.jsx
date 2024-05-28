import React, { useEffect, useState } from "react";
import genreid from "../utility/genre";
import genreids from "../utility/genre";

function Watchlist({ watchlist, setWatchList ,handleRemoveWatchList}) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genors"]);
  const [currentGenres, setCurrentGenre] = useState("All Genres");
  //search watchlist functionality
  let handeleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort(
      (movieA, movieB) => movieA.vote_average - movieB.vote_average
    );

    setWatchList([...sortedIncreasing]);
  };
  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort(
      (movieA, movieB) => movieB.vote_average - movieA.vote_average
    );

    setWatchList([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreid[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  const handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap gap-3 m-4 text-black">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currentGenres == genre
                  ? `cursor-pointer flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold`
                  : `cursor-pointer flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold`
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      {/* //search field */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search For Movie"
          className="h-[3rem] w-[18rem] bg-gray-300 outline-none px-4 rounded-md"
          onChange={handeleSearch}
          value={search}
        />
      </div>

      {/* table */}
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-900 text-center">
          <thead className="border-b-2 ">
            <tr>
              <th>Name</th>
              <th className="flex gap-3 items-center justify-center">
                <div onClick={sortIncreasing} className="cursor-pointer">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div>Ratings</div>
                <div onClick={sortDecreasing} className="cursor-pointer">
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {/* //search functionality */}
            {watchlist
              .filter((movieObj) => {
                if (currentGenres === "All Genres") {
                  return true;
                } else {
                  return genreid[movieObj.genre_ids[0]] == currentGenres;
                }
              })
              .filter((movieObj) =>
                movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase())
              )
              .map((movieObj) => {
                return (
                  <>
                    <tr className=" border-b-2">
                      <td className="flex items-center px-6 py-4">
                        <img
                          src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                          className="h-[6rem] w-[10rem]"
                        />
                        <div className="mx-10">{movieObj.title}</div>
                      </td>

                      <td>{movieObj.vote_average}</td>
                      <td>{movieObj.popularity}</td>
                      <td>{genreid[movieObj.genre_ids[0]]}</td>

                      <td 
                      onClick={()=>handleRemoveWatchList(movieObj)}
                      className="text-red-800 cursor-pointer">Delete</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
