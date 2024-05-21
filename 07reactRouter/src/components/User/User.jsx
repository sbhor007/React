import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const  {userid} = useParams()
  return (
    <div className='text-center bg-gray-600 text-white py-3'>User: {userid} </div>
  )
}

export default User
