import React, { useEffect, useState } from "react";
import Product from "./Product";
import Chome from "./Chome/Chome";
import Footer from "../Footer/Footer";

import "./ProductList.css";
import Recommended from "./Recommended/Recommended";
const ProductList = () => {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(api_url)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="productlist-container">
            {/* <h2 className="text-center p-3"> Our Products </h2> */}
            <Chome />

            <div className="container3">
                <div className="sidebarr">
                    <div className="services">
                        <h2 className="slider-title">services</h2>
                        <ul className="items">
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                        </ul>
                    </div>
                    <div className="services">
                        <h2 className="slider-title">services</h2>
                        <ul className="items">
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                        </ul>
                    </div>
                </div>
                <div className="products">
                <Recommended />
                    <div className="row1">
                        {products.map((prod) => {
                            return (
                                <div className="col-3" key={prod.id}>
                                    <Product prod={prod} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ProductList;
