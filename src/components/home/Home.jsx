import "./Home.css"
import Footer from "../footer/Footer.jsx";
import Nav from "../navbar/Nav.jsx";
import userImg from "../../images/Home.png"

const Home = () => {
    return (
        <div className="home">
            <Nav/>
            <div className="hero">
                <div className="userTitle">
                    <h4>Hey, I am Ilkhom</h4>
                    <h2>I am a FrontEnd developer. I create web pages for people</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

                </div>
                <div className="userImg">
                    <img src={userImg} alt="User image"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Home
