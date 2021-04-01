import React from "react";
import Layout from "../components/Layout";
import useCartContext from "../contexts/useCartContext";
import useProductContext from "../contexts/useProductContext";

const Category = () => {
  const { allProducts, chosenCategory, allcategories } = useProductContext();
  const { addCart, checkExist, updateOldIncrement } = useCartContext();

  const addProductToCart = (product) => {
    if (checkExist("id", product.id)) {
      updateOldIncrement("id", product.id, "quantity", 1);
      return;
    }
    product.quantity = 1;
    addCart(product);
  };
  return (
    <div>
      <Layout>
        <h1 id="video-title">How does the {chosenCategory} sound like?</h1>
        {allcategories
          .filter((e) => e.name === chosenCategory)
          .map((ele, index) => {
            return (
              <iframe
                key={index}
                width="853"
                height="480"
                className="video"
                src={ele.video}
                title={ele.name}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            );
          })}

        <h1 className="product-title">{chosenCategory} Page</h1>
        <div className="ui grid">
          {allProducts
            .filter((e) => e.category === chosenCategory)
            .map((product, index) => {
              return (
                <div className="four wide column" key={index}>
                  <div className="ui card">
                    <div className="image">
                      <img className="product-img" src={product.image} />
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
              );
            })}
        </div>
      </Layout>
    </div>
  );
};

export default Category;
