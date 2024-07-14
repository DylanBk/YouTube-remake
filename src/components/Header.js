import React from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
const colors = require('../styles/colors')

function Header() {
    return (
        <header className='w-full flex flex-col flex-auto items-center p-4 light:bg-white dark:bg-almost-black'>
            <Navbar />
            <Categories />
        </header>
    );
};

export default Header;