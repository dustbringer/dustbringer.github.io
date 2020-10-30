import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to="/">Home </Link>
            <Link to="/about">About Me </Link>
            <Link to="/art">Art </Link>
        </div>
    );
}

export default Navbar;