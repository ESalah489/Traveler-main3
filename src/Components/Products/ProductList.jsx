import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h2 className="text-center p-3"> Our Products </h2>
      <div className="container">
        <div className="row">
          {products.map((prod) => {
            return (
              <div className="col-3" key={prod.id}>
                <Product prod = {prod} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
