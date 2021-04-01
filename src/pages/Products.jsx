import React, { useState } from "react";
import Layout from "../components/Layout";
import useCartContext from "../contexts/useCartContext";
import useProductContext from "../contexts/useProductContext";
import { sliderImage } from "../slider";
const Products = () => {
  const { allProducts } = useProductContext();
  const { addCart, checkExist, updateOldIncrement } = useCartContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const addProductToCart = (product) => {
    if (checkExist("id", product.id)) {
      updateOldIncrement("id", product.id, "quantity", 1);
      return;
    }
    product.quantity = 1;
    addCart(product);
  };

  const changeNext = () => {
    if (currentImageIndex < sliderImage.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const changePrev = () => {
    if (currentImageIndex === 0) {
      return;
    }
    setCurrentImageIndex(currentImageIndex - 1);
  };

  return (
    <Layout>
      <div className="products">
        <div className="slider">
          <i onClick={changePrev} class="angle left icon"></i>
          <img
            className="slider-img"
            src={sliderImage[currentImageIndex]}
            alt="slider image"
          />
          <i onClick={changeNext} class="angle right icon"></i>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {sliderImage.map((_, i) => {
            return (
              <div
                onClick={() => setCurrentImageIndex(i)}
                className="dot"
                style={{ backgroundColor: currentImageIndex === i && "gray" }}
              ></div>
            );
          })}
        </div>

        <h1 className="product-title">Products</h1>
        <div className="ui grid">
          {allProducts.map((product, i) => (
            <div className="four wide column" key={i}>
              <div className="ui card">
                <div className="image">
                  <img
                    className="product-img"
                    src={product.image}
                    alt={product.productName}
                  />
                </div>
                <div className="content">
                  <a className="header">{product.productName}</a>
                  <div className="description">
                    Category - <b>{product.category}</b>
                  </div>
                  <div className="header price">
                    US <span className="pricetag">{product.price}</span>
                  </div>
                </div>
                <div className="extra content">
                  <button className="ui black button floated left">
                    <i className="eye icon" />
                    View Product
                  </button>
                  <button
                    onClick={() => addProductToCart(product)}
                    className="ui brown button floated right"
                  >
                    <i className="shopping cart icon" />
                    Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
