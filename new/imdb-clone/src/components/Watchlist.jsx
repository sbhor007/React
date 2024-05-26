import React from "react";

function Watchlist() {
  return (
    <>

      <div className="flex justify-center flex-wrap gap-3 m-4">
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold">Action</div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold">Action</div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold">Action</div>
        
      </div>

      {/* //search field */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search For Movie"
          className="h-[3rem] w-[18rem] bg-gray-300 outline-none px-4"
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
            <tr className=" border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-mistery-movie-poster-design-template-2ec690d65c22aa12e437d765dbf7e4af_screen.jpg?ts=1680854635"
                  className="h-[6rem] w-[10rem]"
                />
                <div className="mx-10">Outsider</div>
              </td>

              <td>805</td>
              <td>9</td>
              <td>Action</td>

              <td className="text-red-800">Delete</td>
            </tr>
            <tr className=" border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-mistery-movie-poster-design-template-2ec690d65c22aa12e437d765dbf7e4af_screen.jpg?ts=1680854635"
                  className="h-[6rem] w-[10rem]"
                />
                <div className="mx-10">Outsider</div>
              </td>

              <td>805</td>
              <td>9</td>
              <td>Action</td>

              <td className="text-red-800">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
