import React, {useCallback, useContext} from 'react'
import UserContext from '../context/UserContext'



function Profile() {
    // recev data form 
    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>

  return (
    <div>Welcome {user.username}</div>
  )
}

export default Profile