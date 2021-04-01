import { useContext } from "react";
import { ProductContext } from "./ProductProvider";

const useProductContext = () => {
  return useContext(ProductContext);
};

export default useProductContext;
