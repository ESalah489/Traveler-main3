import React from "react";
import './Ready.css'
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineChevronUp } from "react-icons/hi";
import Overlay from "../overlay/Overlay";
const Ready = () => {
    const [show, setshow] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isOverlayOpne, setisOverlayOpne] = useState(false);
    return (
        <div className="con">
            <div className="ready">
                <div className="disp-flex">
                    <h1 className="dispText">Ready to drive your business success?</h1>
                    <button className="btn-ready" id="overlay" onClick={() => setisOverlayOpne(!isOverlayOpne)}>Book Now</button>
                </div>
            </div>
            <div className="T-Partner">
                <div className="disp-flex1">
                    <div className="icon icon-ready dropdown">
                        {isActive ? <HiOutlineChevronUp className="Icon" onClick={() => {
                            setshow(!show)
                            setIsActive(!isActive)
                        }} /> :
                            <IoIosArrowDown className="Icon" onClick={() => {
                                setshow(!show)
                                setIsActive(!isActive)
                            }} />
                        }
                    </div>
                    <h1 className="dispText1">Your Trusted Technology Partner</h1>
                </div>
                {
                    show ? <div className="about" >
                        <p>bla Software’s mission is to put the customer
                            first and deliver excellence in through our solutions. Works very closely with our customers to understand their business challenges and objectives.</p>
                    </div> : null
                }
            </div>
            <Overlay
                isOpen={isOverlayOpne}
                onClose={() => setisOverlayOpne(!isOverlayOpne)}
            >
                    <div className="conofbot">
                        <div className="discription">
                            <div className="text">Let's Connect</div>
                            <div className="disc">
                                Fill up and submit this form to reach us with
                                your query and we will get back to you, soon!
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
                                <div className="section1">
                                    <select
                                        name="snob"
                                        id=""
                                        className="form__field select_field"
                                    >
                                        <option value="-1">
                                            select nature of besiness
                                        </option>
                                        <option value="1">select</option>
                                        <option value="2">select</option>
                                        <option value="3">select nature</option>
                                        <option value="4">select nature</option>
                                    </select>
                                    <label
                                        for="snob"
                                        className="notefication"
                                    ></label>
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
                                    ></label>
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
                                    ></label>
                                    <input
                                        type="text"
                                        className="form__field"
                                        placeholder="Company Name"
                                        name="company"
                                        id="company"
                                    />
                                    <label
                                        for="company"
                                        className="notefication"
                                    ></label>
                                    <input
                                        type="text"
                                        className="form__field"
                                        placeholder="City"
                                        name="city"
                                        id="city"
                                    />
                                    <label
                                        for="city"
                                        className="notefication"
                                    ></label>
                                </div>
                                <div className="section1">
                                    <select
                                        name="wltkmr"
                                        id=""
                                        className="form__field select_field"
                                    >
                                        i would like to know more about
                                        <option value="-1">
                                            i would like to know more about
                                        </option>
                                        <option value="1">
                                            i would like to know more about
                                        </option>
                                        <option value="2">
                                            i would like to know more about
                                        </option>
                                        <option value="3">
                                            i would like to know more about
                                        </option>
                                        <option value="4">
                                            i would like to know more about
                                        </option>
                                    </select>
                                    <label
                                        for="wltkmr"
                                        className="notefication"
                                    ></label>
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
                                    ></label>
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
                                    ></label>
                                    <input
                                        type="text"
                                        className="form__field"
                                        placeholder="Company Field "
                                        name="companyfield"
                                        id="companyfield"
                                    />
                                    <label
                                        for="companyfield"
                                        className="notefication"
                                    ></label>
                                    <input
                                        type="text"
                                        className="form__field"
                                        placeholder="Country"
                                        name="country"
                                        id="country"
                                    />
                                    <label
                                        for="country"
                                        className="notefication"
                                    ></label>
                                </div>
                            </div>
                            <div className="message">
                                <textarea
                                    name="message"
                                    className="form__field1"
                                    cols="30"
                                    rows="6"
                                    placeholder="Message"
                                ></textarea>
                                <label
                                    for="message"
                                    className="notefication"
                                ></label>
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
                            <label for="robot" className="notefication"></label>
                            <div className="botall">
                                <button type="submit" id="bott">
                                    submit
                                </button>
                            </div>
                        </form>
                    </div>
            </Overlay>
        </div>
    );
}
export default Ready;