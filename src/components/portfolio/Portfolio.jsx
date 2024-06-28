import "./Portfolio.css"
import Footer from "../footer/Footer.jsx";
import Nav from "../navbar/Nav.jsx";
import {portfolioInfo} from "../../db/index.js";
import { MdArrowOutward } from "react-icons/md";


const Portfolio = () => {
    return (
        <div className="portfolio">
            <Nav/>
                <h3>My Portfolio</h3>
                <div className="cards">
                    {
                        portfolioInfo.map(card =>
                            <div key={card.id} className="card">
                                <div className="card-img">
                                    <img src={card.image} alt="Image"/>
                                </div>
                                <div className="card-body">
                                    <h4>{card.siteName}</h4>
                                    <p>{card.description}</p>
                                    <h6 className="technologie">Technologies: <span>Html</span> <span>Css</span> <span>JavaScript</span></h6>
                                    <a className="btn-view" target="_blank" href={card.siteLink}>Click here <MdArrowOutward/></a>
                                </div>
                            </div>
                        )
                    }
                </div>
            <Footer/>
        </div>
    )
}
export default Portfolio
