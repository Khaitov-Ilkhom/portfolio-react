import "./MySkills.css"
import Footer from "../footer/Footer.jsx";
import Nav from "../navbar/Nav.jsx";
import {skills} from "../../db/index.js";

const MySkills = () => {
    return (
        <div className="my-skills">
            <Nav/>
                <div className="skills">
                    {
                        skills.map(skill =>
                            <div key={skill.id} className="skill-card">
                                <img src={skill.img} alt=""/>
                                <h4>{skill.skillName}</h4>
                            </div>
                        )
                    }
                </div>
            <Footer/>
        </div>
    )
}
export default MySkills
