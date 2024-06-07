import React from 'react'
import {useDispatch} from '@reduxjs/toolkit'
import authService  from '../../appwrite/config'
import {logout} from '../../store/authSlic'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        authService.logout()
    }
  return (
    <div>LogoutBtn - 13:06</div>
  )
}

export default LogoutBtn