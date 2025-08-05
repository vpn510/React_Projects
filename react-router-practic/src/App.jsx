import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import RootLayout from './layout/RootLayout'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
      </Route>
    )
  )
  return (
    <RouterProvider  router={router}/>
  );
}

export default App;
