import React, { useEffect, useState } from "react";

function Watchlist({ watchlist ,setWatchList}) {
  const [search, setSearch] = useState("");

  //search watchlist functionality
  let handeleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () =>{
    let sortedIncreasing = watchlist.sort((movieA, movieB) => movieA.vote_average - movieB.vote_average)

    setWatchList([...sortedIncreasing])
  }
  let sortDecreasing = () =>{
    let sortedDecreasing = watchlist.sort((movieA, movieB) => movieB.vote_average - movieA.vote_average)

    setWatchList([...sortedDecreasing])
  }

  

  return (
    <>
      <div className="flex justify-center flex-wrap gap-3 m-4 text-black">
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold">
          Action
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold">
          Action
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold">
          Action
        </div>
      </div>

      {/* //search field */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search For Movie"
          className="h-[3rem] w-[18rem] bg-gray-300 outline-none px-4"
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
                      <td>{movieObj.vote_count}</td>
                      <td>Action</td>

                      <td className="text-red-800">Delete</td>
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
