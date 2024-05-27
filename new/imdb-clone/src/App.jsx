import { useState } from "react";
// import './App.css'
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddWatchList = (movieObj) => {
    let newWatclist = [...watchlist, movieObj];
    setWatchlist(newWatclist);
    console.log(newWatclist);
  };

  let handleRemoveWatchList = (movieObj) => {
    let filterWatchList = watchlist.filter((movie) => {
      return movieObj.id != movie.id;
    });
    setWatchlist(filterWatchList);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/movies"
            element={
              <>
                <Banner />
                <Movies
                  handleAddWatchList={handleAddWatchList}
                  handleRemoveWatchList={handleRemoveWatchList}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
