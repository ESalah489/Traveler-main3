import React, { useState } from "react";
import "./Companyadd.css";
import { RiUploadCloud2Fill } from "react-icons/ri";

const Companyadd = () => {
    const [image, setimage] = useState("");
    function handleImage(even) {
        console.log(even.target.files);
        setimage(even.target.files[0]);
    }
    return (
        <div className="containerForPart">
            <form name="form" className="form1" id="Formv">
                <div className="dispblock">
                    <div className="block-of-image">
                        <div className="content">
                            <img src="" alt="" />
                            <h2>image for your product</h2>
                            <p>
                                Browse and choose the files you want to upload
                                your computer
                            </p>
                            <input
                                type="file"
                                name="file"
                                id="file"
                                onChange={handleImage}
                                className="button"
                                placeholder="image upload"
                            />
                            <label htmlFor="file"><RiUploadCloud2Fill/> &nbsp; image upload</label>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card2">
                            <div className="text">
                                <h2> please fill this form!</h2>
                            </div>
                            <div className="companyName">
                                <input
                                    type="text"
                                    name="CN"
                                    placeholder="Company Name"
                                />
                            </div>
                            <div className="discription">
                                <textarea
                                    name="discription"
                                    className="form__field1"
                                    cols="30"
                                    rows="3"
                                    placeholder="Discription"
                                />
                            </div>
                            <div className="botall">
                                <button type="submit" id="bott">
                                    submit
                                </button>
                            </div>
                        </div>
                        <div className="card3">
                            <div className="hint">
                                <h2>
                                    the product detail on the way for browser
                                </h2>
                            </div>
                            <div className="dis">
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Dolorem vero ratione
                                    laudantium possimus at magnam rerum!
                                    Asperiores, iste debitis sed unde dolorem!
                                </p>
                            </div>
                            <div className="mess">
                                <h3>
                                    it may take up to 10 minits after displaed
                                    in browser
                                </h3>
                            </div>
                            <div className="thank">
                                <h4>Thank you for listing with Bla! </h4>
                            </div>
                            <div className="botofcard">
                                <button>Go To Your DashBoard </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Companyadd;
