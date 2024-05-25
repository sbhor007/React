import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {RouterProvider,Router, createBrowserRouter, createRoutesFromElements,Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Navbar from './components/Navbar.jsx'
import Watchlist from './components/Watchlist.jsx'
import Movies from './components/Movies.jsx'
import Banner from './components/Banner.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="/movies" element={<><Banner /><Movies /></>} />
      <Route path="/watchlist" element={<Watchlist />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
