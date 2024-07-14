import React from 'react';
import Navbar from './Navbar';
const colors = require('../styles/colors')

function Header() {
    return (
        <header className='w-full flex flex-row flex-auto justify-center p-4 light:bg-white dark:bg-almost-black'>
            <Navbar />
        </header>
    );
};

export default Header;