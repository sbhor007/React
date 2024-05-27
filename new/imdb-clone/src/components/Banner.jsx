import React from 'react'

function Banner() {
  return (
    <div className='h-[40vh] md:h-[75vh]  bg-cover bg-center flex items-end' style={{backgroundImage : `url(	https://wallpaperaccess.com/full/848297.jpg)`}}>
      <div className='text-white text-2xl w-full text-center bg-gray-900/60 p-4'>Avengers Endgame</div>
    </div>
  )
}

export default Banner