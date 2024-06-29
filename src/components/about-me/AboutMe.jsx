import "./AboutMe.css"
import Footer from "../footer/Footer.jsx";
import Nav from "../navbar/Nav.jsx";
import userImg from '../../images/About Me.png'


const AboutMe = () => {
    return (
        <div className="about-me">
            <Nav/>
            <div className="box">
                <div className="image">
                    <img src={userImg} alt="User image"/>
                </div>
                <div className="info">
                    <h5>About</h5>
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eaque incidunt molestias odio odit
                        sapiente sit, veniam. Aliquid autem blanditiis consequuntur cumque dignissimos doloribus eius,
                        ex fugit magnam magni nulla praesentium quis quisquam quos ullam velit vitae voluptates
                        voluptatum!
                    </p>
                    <br/>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus enim fugit sapiente sed vel!</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default AboutMe
