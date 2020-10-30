import React from 'react';
import Navbar from '../components/Navbar.js';

function Error() {
    return (
        <div>
            <Navbar />
            <p>
                ERROR, route not found.
            </p>
        </div>
    );
}

export default Error;