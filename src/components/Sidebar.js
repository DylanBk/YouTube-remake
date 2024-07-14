import React from "react";
const colors = require('../styles/colors')

const options1 = ["Home", "Shorts", "Subscriptions"]
const options2 = ["Your Channel", "History", "Playlists", "Your Videos", "Watch Later", "Liked Videos"]
const subscriptions = ["MrBeast", "BroCode", "Sidemen", "STORROR", "MoreSidemen", "Kanye West", "Kai Cenat", "iShowSpeed"]

function Sidebar() {
    return(
        <div className="absolute h-full w-32 flex flex-col pl-4 overflow-x-hidden">
            <div className="h-fit w-32 flex flex-col pb-1 border-b">
                {options1.map((option, index) => (
                    <a id={`sidebar-option-${option}`} href='#' key={index} className="w-28 pl-1 py-2 rounded-md overflow-y-hidden hover:bg-almost-black-lighter">
                        {option}
                        </a>
                ))}
            </div>
            <div className="h-fit w-32 flex flex-col pb-1 border-b mt-1">
                <p className="mb-1 font-bold overflow-y-hidden">You</p>
                {options2.map((option, index) => (
                    <a id={`sidebar-option-${option}`} href='#' key={index} className="w-28 pl-1 py-2 rounded-md overflow-y-hidden hover:bg-almost-black-lighter">
                        {option}
                    </a>
                ))}
            </div>
            <div className="h-fit w-32 flex flex-col mt-1">
                <p className="mb-1 font-bold overflow-y-hidden">Subscriptions</p>
                {subscriptions.map((subscription, index) => (
                    <a id={`channel-${subscription}`} href="#" key={index} className="w-28 pl-1 py-2 rounded-md overflow-y-hidden hover:bg-almost-black-lighter">
                        {subscription}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;