import { React, useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import { Link } from "react-router-dom";

function Products() {
  const [productinfo, setProductinfo] = useState([]);
  useEffect(() => {
    async function fakestoreapi() {
      let data = await axios.get("https://fakestoreapi.com/products");
      setProductinfo(data.data);
    }
    fakestoreapi();
  }, []);

  return (
    <>
      <div className="products">
        <div className="products_container">
          <div className="startup">
            <h2>Product Demo from Fake Store API</h2>
            <Link to={"/dashboard"}>
              <button className="loginbtn">Dashboard</button>
            </Link>
            <a href="https://noormohammad.netlify.app/" target="_blank">
              <button className="loginbtn">Amazon Clone</button>
            </a>
          </div>
          <div className="product">
            {productinfo.map((product) => (
              <div className="product__info">
                <p className="product__id">{product.id}</p>
                <span className="product__price">{product.price}</span>
                <p className="product__category">{product.category}</p>
                <div className="image">
                  <img src={product.image} alt="" />
                </div>
                <div className="product__des">
                  <p className="product__title">{product.title}</p>
                  <p className="product__description">{product.description}</p>
                  <div className="product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        /> */}
      </div>
    </>
  );
}

export default Products;
