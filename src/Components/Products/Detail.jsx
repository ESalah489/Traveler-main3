import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const url_api = "https://fakestoreapi.com/products";
  const params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${url_api}/${params.detailId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <div>
      <div className="container">
        <h1> Product {params.detailId} </h1>
        <div className="row">
          <div className="card" style={{ width: "350px" }}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              style={{ height: "350px" }}
            />
            <div className="card-body">
              <h5 className="card-title"><u>Title:</u> {product.title}</h5>
              <p className="card-text"><u>Description:</u> {product.description}</p>
              <p className="card-text"><u>Price:</u> {product.price}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
