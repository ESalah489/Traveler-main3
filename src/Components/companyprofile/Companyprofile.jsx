import React from "react";
import "./Companyprofile.css";
import Companyadd from "../Companyadd/Companyadd";
import PHome from "../phome/PHome";
import Footer from "../Footer/Footer";

const Companyprofile = () => {
    return (
        <div className="container-all">
            <PHome/>
            <Companyadd/>
            <Footer/>
        </div>
    );
};
export default Companyprofile;
