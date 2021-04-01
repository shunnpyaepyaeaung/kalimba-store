import { useState } from "react";

const useProduct = (productObj) => {
  const [products, setProducts] = useState(productObj);
  return { products, setProducts };
};

export default useProduct;
