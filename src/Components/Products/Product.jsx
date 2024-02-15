import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
 
const Product = (props) => {
  const { prod } = props;
  return (
    <div>
    <div className="card-container">
      <div className="card">
        <img src={prod.image} className="card-img1" alt={prod.title} />
        <div className="card-body">
          <h5 className="card-title1">{prod.title}</h5>
          <p className="card-text1">{prod.description}</p>
          <Link to={`/detail/${prod.id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;