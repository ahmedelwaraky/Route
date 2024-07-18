import React from 'react';
import Navbar from './../Navbar/Navbar'
import { Outlet } from 'react-router-dom';


export default function Layout() {
  return (
    <div>
      
      <Navbar/>
      <div className="container mt-5">
      <Outlet/>
      </div>
    </div>
  )
}