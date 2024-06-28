import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import AboutMe from "./components/about-me/AboutMe.jsx";
import MySkills from "./components/myskills/MySkills.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <div className="container">
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/myskills" element={<MySkills/>}/>
            <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
