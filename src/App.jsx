import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import {createBrowserRouter,RouterProvider}  from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login'
import About from './Components/About'

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/login",
      element:<Login/>
    },

   

  ])
 return(
  <>
   <Navbar/>
   <RouterProvider router={router}/>
  </>
 )
}

export default App
