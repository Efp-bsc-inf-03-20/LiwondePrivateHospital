'use client'
import React, { useState } from "react";
import './style.css';
import icon from '../../../images/icon.png';
import Image from "next/image";

export default function Finance() {
    const [showProfile, setShowProfile] = useState(false);

    // Function to toggle profile popup visibility
    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    return (
        <div>
            <div id="dash">
                <header>Finance</header>
                <ul>
                    {/* Use onClick event to toggle profile popup */}
                    <li><a href="#" onClick={toggleProfile}>Profile</a></li>
                    <li><a href="Summary">Day Summary</a></li>
                    <li><a href="History">Transaction History</a></li>
                    <li><a href="Login">Logout</a></li>
                </ul>
            </div>
            <div id="table">
                <div>
                    <Image
                        src={icon}
                        alt="alt"
                        width={100}
                        height={100}
                    />
                </div>
                <div id="searchbar">
                    <input
                        type="text"
                        id="searchbar"
                        placeholder="search for patients"
                    />
                </div>
                <div className="button-container">
                    <div>
                        <a href="ViewData">
                            <button className="button">Todays Data</button>
                        </a>
                    </div>
                    <div>
                        <a href="Record">
                            <button className="button2">New Day</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Profile Popup Container */}
            {showProfile && (
                <div className="profile-popup absolute right-0 top-0 mt-2 mr-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <div className="profile-content p-4">
                        <div className="flex justify-center">
                            <div className="rounded-full overflow-hidden h-32 w-32 mb-4">
                                <Image
                                    src={icon}
                                    alt="Profile"
                                    width={128}
                                    height={128}
                                />
                            </div>
                        </div>
                        <h2 className="text-lg font-semibold text-center mb-2">User Profile</h2>
                        <p className="text-sm"><span className="font-semibold">Name:</span> Wakisa</p>
                        <p className="text-sm"><span className="font-semibold">Age:</span> 30</p>
                        <p className="text-sm"><span className="font-semibold">Role:</span> Financial Analyst</p>
                        <p className="text-sm"><span className="font-semibold">Phone Number:</span> 0887261094</p>
                        <p className="text-sm"><span className="font-semibold">Email:</span>wakisa@liwondeprivate.org</p>
                        <p className="text-sm"><span className="font-semibold">Status:</span> Active 🟢</p>
                        <button onClick={toggleProfile} className="mt-4 w-full bg-green-900 hover:bg-orange-700 text-white py-1 px-3 rounded-md">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
