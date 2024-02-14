import React from "react";
import "./Userprofile.css";
import { useState } from "react";
import Overlay from "../overlay/Overlay";
import Footer from "../Footer/Footer";
const Userprofile = () => {
    const [isOverlayOpne, setisOverlayOpne] = useState(false);
    return (
        <>
            <div className="User-container">
                <div className="content">
                    <div className="user-img-edit">
                        <div className="sub-container">
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="user">
                                <span>
                                    <h3>user name</h3>
                                </span>
                            </div>
                        </div>
                        <div className="bot-user">
                            <button
                                id="overlay"
                                onClick={() => setisOverlayOpne(!isOverlayOpne)}
                            >
                                Edit profile
                            </button>
                        </div>
                    </div>
                    <div className="content2">
                        <div className="your-info">
                            <h4>Your Information</h4>
                        </div>
                        <div className="information">
                            <div className="feild">
                                <div className="indivdual">
                                    <h4>First Name</h4>
                                    <div className="text2">
                                        Lorem ipsum dolor sit amet consectetur
                                    </div>
                                </div>
                                <div className="indivdual">
                                    <h4>Last Name</h4>
                                    <div className="text2">
                                        Lorem ipsum dolor sit amet consectetur
                                    </div>
                                </div>
                            </div>
                            <div className="feild">
                                <div className="indivdual">
                                    <h4>Email</h4>
                                    <div className="text2">
                                        Lorem ipsum dolor sit amet consectetur
                                    </div>
                                </div>
                                <div className="indivdual">
                                    <h4>Phone</h4>
                                    <div className="text2">
                                        Lorem ipsum dolor sit amet consectetur
                                    </div>
                                </div>
                            </div>
                            <div className="feild">
                                <div className="indivdual">
                                    <h4>Location</h4>
                                    <div className="text2">
                                        Lorem ipsum dolor sit amet consectetur
                                    </div>
                                </div>
                                <div className="indivdual">
                                    <h4>Your Job</h4>
                                    <div className="text2">
                                        Lorem ipsum dolor sit amet consectetur
                                    </div>
                                </div>
                            </div>
                            <div className="feild bro">
                                <div className="indivdual">
                                    <h4>Bro</h4>
                                    <div className="text2">
                                        Lorem ipsum dolor sit amet consectetur
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Overlay
                    isOpen={isOverlayOpne}
                    onClose={() => setisOverlayOpne(!isOverlayOpne)}
                >
                    <div className="conofbot">
                        <div className="discription">
                            <div className="text">Edit your information</div>
                            <div className="disc">
                                Fill up and submit this form to refresh your
                                information
                            </div>
                        </div>
                        <form
                            name="form"
                            className="form1"
                            id="Formv"
                            onsubmit="return validation()"
                            method="post"
                        >
                            <div className="dispflex">
                                <div className="section11">
                                    <input
                                        type="text"
                                        className="form__field"
                                        placeholder="First Name"
                                        name="fname"
                                        id="fname"
                                    />
                                    <label
                                        for="fname"
                                        className="notefication"
                                    />
                                    <input
                                        type="email"
                                        className="form__field"
                                        placeholder="Email*"
                                        name="email"
                                        id="email"
                                    />
                                    <label
                                        for="email"
                                        className="notefication"
                                    />

                                    <input
                                        type="text"
                                        className="form__field"
                                        placeholder="Location"
                                        name="city"
                                        id="city"
                                    />
                                    <label
                                        for="city"
                                        className="notefication"
                                    />
                                </div>
                                <div className="section11">
                                    <input
                                        type="text"
                                        className="form__field"
                                        placeholder="Last Name"
                                        name="lname"
                                        id="lname"
                                    />
                                    <label
                                        for="lname"
                                        className="notefication"
                                    />
                                    <input
                                        type="tel"
                                        className="form__field"
                                        placeholder="Mobile No."
                                        name="phone"
                                        id="phone"
                                    />
                                    <label
                                        for="phone"
                                        className="notefication"
                                    />
                                    <input
                                        type="text"
                                        className="form__field"
                                        placeholder="your job "
                                        name="companyfield"
                                        id="companyfield"
                                    />
                                    <label
                                        for="companyfield"
                                        className="notefication"
                                    />
                                </div>
                            </div>
                            <div className="message">
                                <textarea
                                    name="message"
                                    className="form__field1"
                                    cols="30"
                                    rows="3"
                                    placeholder="Bro"
                                />
                                <label for="message" className="notefication" />
                            </div>
                            <div class="notRopot">
                                <input
                                    type="checkbox"
                                    name="robot"
                                    id="Delete"
                                />
                                <p>
                                    I agree to receive your newsletters and
                                    accept the data privacy statement
                                    <span id="">*</span>
                                </p>
                            </div>
                            <label for="robot" className="notefication" />
                            <div className="botall">
                                <button type="submit" id="bott">
                                    submit
                                </button>
                            </div>
                        </form>
                    </div>
                </Overlay>
            </div>
            <Footer />
        </>
    );
};
export default Userprofile;
