import React from "react";
import placeholderImage from '../assets/placeholder.png'

const colors = require('../styles/colors')


const videos = ["All", "Gaming", "Music", "History", "Minecraft", "Minecraft Modding", "City-Building Games", "Ancient History", "Live"]

function MainContent() {
    return (
        <div className="absolute right-4 grid grid-cols-3 gap-4 wrap">
            {videos.map((video, index) => (
                <div className="flex flex-col mb-1">
                    <a id={`video-${video}`} href="#" key={index} className="h-[calc(9rem*1.5)] w-[calc(16rem*1.5)] relative rounded-xl hover:rounded-none transition-all">
                        <img src={placeholderImage} className="h-full w-full absolute top-0 right-0">
                        </img>
                    </a>
                    <p>{video}</p>
                </div>
            ))}
        </div>
    )
}

export default MainContent;