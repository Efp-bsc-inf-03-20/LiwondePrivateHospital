'use client'

import React, {useState} from "react";
import './style.css'
import icon from '../../images/icon.png'
import Image from "next/image";
import search from '../images/search.png'
import { Search } from "react-bootstrap-icons";
import Login from "../Login/page";

export default function Sale(){
    
    return(
        <div>
            <div id="dash">
                <header>Pharmacist</header>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">History</a></li>
                    <li><a href="Sale">Drug Management</a></li>
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
                <input type="text"  id="searchbar" placeholder="search for patients..."
            />
             

            </div>
            <div className="button-container">
                <div>
                    <a href="ViewData">
                    <button className="button">Today's Data</button>
                    </a>
                </div>
                <div>
                    <a href="Record">
                    <button className="button2">New Day</button>
                    </a>
                  
                </div>
            </div>  
            </div>
        </div>
    )
    

}