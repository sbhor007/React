import React from "react";
import { Link } from "react-router-dom";

import Logo from "../images/movie-logo.png";
function Navbar() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img className="w-[50px]" src={Logo} alt="" srcset="" />

      <Link to="/movies" className="text-sky-600 text-3xl font-bold">Movies</Link>
      <Link to="/watchlist" className="text-sky-600 text-3xl font-bold">Watchlist</Link>
    </div>
  );
}

export default Navbar;
