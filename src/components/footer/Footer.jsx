import React from 'react'
import logo from "../../images/ix-logo.jpg"
import {NavLink} from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


const Footer = () => {
    return (
        <div className="footer">
            <div className="foot">
                <div className="logo">
                    <img src={logo} alt=""/>
                    <span>Ilkhom</span>
                </div>
                <div>
                    <ul className="link">
                        <li><NavLink className="nav-link" to="/"> Home </NavLink></li>
                        <li><NavLink className="nav-link" to="/portfolio"> Portfolio </NavLink></li>
                        <li><NavLink className="nav-link" to="/aboutme"> About Me </NavLink></li>
                        <li><NavLink className="nav-link" to="/myskills"> My skills </NavLink></li>
                        <li><NavLink className="nav-link" to="/contact"> Contact </NavLink></li>
                    </ul>
                </div>
                <div>
                    <ul className="link">
                        <li><a href="#"></a><FaTelegramPlane/></li>
                        <li><a href="#"></a><FaInstagram/></li>
                        <li><a href="#"></a><FaTwitter/></li>
                        <li><a href="#"></a><FaLinkedinIn/></li>
                        <li><a href="#"></a><FiGithub/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer
