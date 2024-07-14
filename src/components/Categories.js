import React from 'react';
import applyCategoryFilter from '../utils/applyCategoryFilter';
const colors = require('../styles/colors')

const categories = ["All", "Gaming", "Music", "History", "Minecraft", "Minecraft Modding", "City-Building Games", "Ancient History", "Live"]

function Categories() {
    return(
        <div className='flex gap-5 nowrap mt-10 '>
            {categories.map((category, index) => (
                <button id={`category-${category}`} key={index} className='nowrap px-4 py-2 border border-dark-grey rounded-md bg-almost-white hover:bg-almost-white-dark focus:bg-almost-white-dark dark:bg-dark-grey dark:hover:bg-almost-black-lighter dark:focus:bg-almost-black-lighter' onClick={applyCategoryFilter(category)}>
                    {category}
                </button>
            ))}
        </div>
    )
};

export default Categories;