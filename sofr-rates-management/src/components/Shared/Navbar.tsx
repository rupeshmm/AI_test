import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">SOFR Rates Management</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/sofr-editor">SOFR Editor</Link>
                </li>
                <li>
                    <Link to="/rate-cards">Rate Cards</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;