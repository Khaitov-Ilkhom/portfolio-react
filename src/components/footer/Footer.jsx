import "./Footer.css"
import logo from "../../images/ix-logo.jpg"
import {NavLink} from "react-router-dom";
import {FaTelegramPlane} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FiGithub} from "react-icons/fi";


const Footer = () => {
    return (
        <div className="foot">
            <div className="footer">
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
                    <ul className="social">
                        <li><a href="#"><FaTelegramPlane/></a></li>
                        <li><a href="#"><FaInstagram/></a></li>
                        <li><a href="#"><FaTwitter/></a></li>
                        <li><a href="#"><FaLinkedinIn/></a></li>
                        <li><a href="#"><FiGithub/></a></li>
                    </ul>
                </div>
            </div>
            <br/>
            <hr/>
            <div className="footer-bottom">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies Settings</p>
            </div>
        </div>
    )
}
export default Footer
