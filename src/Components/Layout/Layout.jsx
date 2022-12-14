
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout({ userData, setUserData }) {

  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate('/login')
  }

  return <>

    <Navbar logOut={logOut} userData={userData} />
    <Outlet></Outlet>
  </>
}
