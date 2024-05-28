import { useEffect, useState } from "react";
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
    //store data in a local storage
    localStorage.setItem("moviesApp", JSON.stringify(newWatclist));

    setWatchlist(newWatclist);

    console.log(newWatclist);
  };

  let handleRemoveWatchList = (movieObj) => {
    const filteredWatchList = watchlist.filter(
      (movie) => movieObj.id != movie.id
    );

    setWatchlist(filteredWatchList);
    //delate items from local storage
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
    console.log(watchlist);
  };
  //store data in a local storage
  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return;
    } else {
      setWatchlist(JSON.parse(moviesFromLocalStorage));
    }
  }, []);
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
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                setWatchList={setWatchlist}
                handleRemoveWatchList={handleRemoveWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
