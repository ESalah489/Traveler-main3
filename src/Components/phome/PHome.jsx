import React from "react";
import './PHome.css' 
import { Link } from "react-router-dom";

const PHome =()=>{
    return(
        <section className="home1">
            <div className="secContainer container">
                <div className="homeText">
                    <h1 className="title">
                    We are very happy to have you with us 
                    </h1>
                    <p className="subTitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                    </p>
                    <button className="btn-Home">
                        <Link to='/' className="Link">GO BACK</Link>
                    </button>
                </div>
            </div>
        </section>
    );
}
export default PHome;