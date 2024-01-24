import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import "./Navbar.css";
import Pexels from '../images/download.png'


export const Navbar = () => {
    const [manuOpen, setManuOpen] = useState(false)



    return(
       <nav>
        <div className="titles">
        <img src={Pexels} alt="Pexels" height={45} width={45}  className="img1"/>
        <Link to="/" className="title">Houses and rental house</Link>
        </div>

        <div className="manu" onClick={() => {
            setManuOpen(!manuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <ul className={manuOpen ? "open" : ""}>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/About">About</NavLink>
            </li>
            <li>
                <NavLink to="Services">Services</NavLink>
            </li>
            <li>
                <NavLink to="Contact">Contact</NavLink>
            </li>
        </ul>
       </nav>
    )
};