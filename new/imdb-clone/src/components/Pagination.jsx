import React from "react";

function Pagination({nextPage,previusPage,curruntPage}) {
  return (
    <div className="bg-gray-400 p-4 flex justify-center my-7">
      <div className="px-8 hover:cursor-pointer" onClick={previusPage}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{curruntPage}</div>
      <div className="px-8 hover:cursor-pointer">
        <i className="fa-solid fa-arrow-right" onClick={nextPage}></i>
      </div>
    </div>
  );
}

export default Pagination;
