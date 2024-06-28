import "./Nav.css"
import {NavLink} from "react-router-dom";
import logo from "../../images/ix-logo.jpg"

const Nav = () => {
    return (
        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="Logo"/>
                <span>Ilkhom</span>
            </div>
            <ul className="link">
                <li><NavLink className="nav-link" to="/"> Home </NavLink></li>
                <li><NavLink className="nav-link" to="/portfolio"> Portfolio </NavLink></li>
                <li><NavLink className="nav-link" to="/aboutme"> About Me </NavLink></li>
                <li><NavLink className="nav-link" to="/myskills"> My skills </NavLink></li>
                <li><NavLink className="nav-link" to="/contact"> Contact </NavLink></li>
            </ul>
            <div className="btn">
                <button>Nimadir</button>
            </div>
        </nav>
    )
}
export default Nav
