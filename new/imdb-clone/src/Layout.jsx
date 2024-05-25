import React from 'react'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    {/* <Watchlist />
    <Movies /> */}
    </>
  )
}

export default Layout