import React from 'react';
import {Link} from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
 return (
        <nav id="main-links">
                <Link to='/'>Home</Link>
                <Link to='/market'>Market</Link>
        </nav>
    );
};
export default Navbar;