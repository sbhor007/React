import React, { useState } from "react";

function Watchlist({watchlist}) {

  const [search,setSearch] = useState('')

  //search watchlist functionality
  let handeleSearch = (e)=>{
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="flex justify-center flex-wrap gap-3 m-4">
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
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2 ">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {/* //search functionality */}
            {watchlist.filter((movieObj)=> movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())).map((movieObj) => {
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
