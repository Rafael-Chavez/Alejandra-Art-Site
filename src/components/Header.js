import React from 'react';
import './Navbar.css'; // You can create a separate CSS file for styling
import './Header.css'; // You can create a separate CSS file for styling the header


const Header = () => {
    return (
        <nav className="header">
            <div className="header-logo">
                <h1>Art by Alejandra</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Header;
