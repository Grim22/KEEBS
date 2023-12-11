import { useState } from 'react'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Index from './components/Index'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Login from './components/Login'
import Cart from './components/Cart';
import Product from './components/Products';
import Wishlist from './components/Wishlist';


import './App.css'
import { SeeMore } from './components/SeeMore';
import Register from './components/Register';
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index/>,
    },
    {
      path: "/nav",
      element: <Nav/>,
    },
    {
      path: "/footer",
      element: <Footer/>,
    },
    {
      path: "/aboutus",
      element: <AboutUs/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
    {
      path: "/product",
      element: <Product/>,
    },
    {
      path: "/favorites",
      element:  <Wishlist/>,
    },
    {
      path: "/signup",
      element: <Register/>,
    },
    {
      path: "/seemore",
      element: <SeeMore/>,
    },
  ]);

  return (
    <>
      <div>
          <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
