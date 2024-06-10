import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/config";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button className="inline-block px-6 py-2 duratin-200 hover:bg-blue-100 rounded-t-full">
      Logout
    </button>
  );
}

export default LogoutBtn;

// using try - catch
/*
  const logoutHandler = () =>{
    try {
      dispatch(authService.logout())
    } catch (error) {
      console.log("LogoutBtn :: logoutHandler :: error", error);
    }
  }
    */
