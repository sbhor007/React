import React from 'react'
import MovieCard from './MovieCard'

function Movies() {
  return (
    <div className='p-5'>
      <div className='text-2xl font-bold text-center m-5'>
        Trending Movies
      </div>
      <div className='flex flex-wrap flex-row justify-between items-end '>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  )
}

export default  Movies