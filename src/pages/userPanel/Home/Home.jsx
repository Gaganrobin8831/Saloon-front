import React from "react"
import { Link } from "react-router-dom";
import"./Home.css";
function Home(){
    return(
        <div className="home-container">
        <h3>Enhance Your Beauty</h3>
        <h2>With our Expert Touch</h2>
        <p>Luxury Salon Experience Just For You</p>
        <Link to={"/login"}>
            <button className="appointment-btn">LOGIN</button>
        </Link>
        {/* <button className="appointment-btn">Book An Appointment</button> */}
        
        </div >
    )
}
export default Home