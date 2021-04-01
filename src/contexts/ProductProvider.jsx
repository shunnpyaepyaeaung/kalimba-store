import React, { createContext, useState } from "react";
import { allcategories } from "../allcategories";
import { allProducts } from "../allProducts";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [chosenCategory, setChosenCategory] = useState("");
  return (
    <ProductContext.Provider
      value={{ allProducts, allcategories, chosenCategory, setChosenCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
