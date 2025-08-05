import React from 'react';
import react from '../assets/react.svg';
import { NavLink } from 'react-router-dom';

import '../App.css';

const Navbar = () => {
   return (
      <nav>
         <img src={react} alt="logo" />
         <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/product"><li>Product</li></NavLink >
         </ul >
      </nav >
   );
}

export default Navbar;
