import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { prod } = props;
  return (
    <div>
      <div className="card">
        <img src={prod.image} className="card-img-top" alt={prod.title} />
        <div className="card-body">
          <h5 className="card-title">{prod.title}</h5>
          <p className="card-text">{prod.description}</p>
          <Link to={`/detail/${prod.id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;