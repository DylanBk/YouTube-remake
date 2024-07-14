import React from 'react';
import burgerMenuBlack from '../assets/burger-menu-black.png'
import burgerMenuWhite from '../assets/burger-menu-white.png'
import ytLogoFullBlack from '../assets/yt-full-logo-black.png'
import ytLogoFullWhite from '../assets/yt-full-logo-white.png'
import micBlack from '../assets/mic-black.png'
import micWhite from '../assets/mic-white.png'
import searchBlack from '../assets/search-black.png'
import searchWhite from '../assets/search-white.png'
import uploadBlack from '../assets/upload-black.png'
import uploadWhite from '../assets/upload-white.png'
import notiBellBlack from '../assets/noti-bell-black.png'
import notiBellWhite from '../assets/noti-bell-white.png'
import profileBlack from '../assets/profile-black.png'
import profileWhite from '../assets/profile-white.png'
const colors = require('../styles/colors')

function Navbar() {
    return (
        <nav className='h-10 w-screen items-start light:bg-white dark:bg-almost-black'>
            <ul className='w-[calc(100%-1rem)] absolute left-4 grid grid-cols-3 gap-10 items-center justify-around'>
                <div className='flex flex-row flex-auto gap-5 items-center justify-self-start'>
                    <li><button className='h-12 w-32 border border-blue-400'>
                            <div className='w-32 relative'>
                                <picture className='h-full w-full absolute left-0 top-0.75'>
                                    <source srcSet={burgerMenuBlack} media='(prefers-color-scheme: light)'></source>
                                    <source srcSet={burgerMenuWhite} media='(prefers-color-scheme: dark)'></source>
                                    <img src={burgerMenuBlack} alt='Burger Menu Icon'></img>
                                </picture>
                            </div>
                        </button></li>
                    <li><a href='#'>
                            <div className='w-32'>
                                <picture>
                                    <source srcSet={ytLogoFullBlack} media='(prefers-color-scheme: light)'></source>
                                    <source srcSet={ytLogoFullWhite} media='(prefers-color-scheme: dark)'></source>
                                    <img src={ytLogoFullBlack} alt='YouTube Logo full size'></img>
                                </picture>
                            </div>
                        </a></li>
                </div>
                <div className='flex flex-row flex-auto gap-5 items-center'>
                    <form id='search-bar-form' name='search-bar-form' className='flex nowrap' method='post'>
                        <input id='search-bar-input' name='search-bar-input' className='w-96 p-2 border border-r-0 border-dark-grey rounded-l-full rounded-r-none m-0 outline-none focus:border-blue-500 dark:bg-almost-black-light' type='text' placeholder='Search'></input>
                        <button id='search-bar-btn' name='search-bar-btn' className='flex items-center px-2 border border-dark-grey rounded-r-full rounded-l-none bg-almost-white dark:bg-almost-black-lighter' type='submit'>
                            <div className='w-7'>
                                <picture>
                                    <source srcSet={searchBlack} media='(prefers-color-scheme: light)'></source>
                                    <source srcSet={searchWhite} media='(prefers-color-scheme: dark)'></source>
                                    <img src={searchBlack} alt='Search Icon'></img>
                                </picture>
                            </div>
                        </button>
                    </form>
                    <li><button className='flex border border-dark-grey m-2 rounded-full bg-almost-white dark:bg-almost-black-lighter'>
                        <div className='w-10'>
                            <picture> 
                                <source srcSet={micBlack} media='(prefers-color-scheme: light)'></source>
                                <source srcSet={micWhite} media='(prefers-color-scheme: dark)'></source>
                                <img src={micBlack} alt='Microphone Icon'></img>
                            </picture>
                        </div>
                    </button></li>
                </div>
                <div className='absolute right-4 flex flex-row flex-auto gap-5'>
                    <li><button>
                            <div className='w-7'>
                                <picture>
                                    <source srcSet={uploadBlack} media='(prefers-color-scheme: light)'></source>
                                    <source srcSet={uploadWhite} media='(prefers-color-scheme: dark)'></source>
                                    <img src={uploadBlack} alt='Upload File Icon'></img>
                                </picture>
                            </div>
                        </button></li>
                    <li><button>
                            <div className='w-7'>
                                <picture>
                                    <source srcSet={notiBellBlack} media='(prefers-color-scheme: light)'></source>
                                    <source srcSet={notiBellWhite} media='(prefers-color-scheme: dark)'></source>
                                    <img src={notiBellBlack} alt='Notification Bell Icon'></img>
                                </picture>
                            </div>
                        </button></li>
                    <li><button>
                            <div className='w-8'>
                                <picture>
                                    <source srcSet={profileBlack} media='(prefers-color-scheme: light)'></source>
                                    <source srcSet={profileWhite} media='(prefers-color-scheme: dark)'></source>
                                    <img src={profileBlack} alt='Profile Icon'></img>
                                </picture>
                            </div>
                        </button></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;