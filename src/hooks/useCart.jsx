import { useState } from "react";

const useCart = () => {
  const [carts, setCarts] = useState([]);

  const addCart = (newProduct) => {
    setCarts([...carts, newProduct]);
  };

  const checkExist = (key, value) => {
    return carts.some((e) => e[key] === value);
  };

  const updateOldIncrement = (key1, val1, key2, num) => {
    setCarts(
      carts.map((obj) => {
        if (obj[key1] === val1) {
          obj[key2] = obj[key2] + num;
        }
        return obj;
      })
    );
  };

  const updateObjKey = (key1, val1, key2, newVal) => {
    setCarts(
      carts.map((obj) => {
        if (obj[key1] === val1) {
          obj[key2] = newVal;
        }
        return obj;
      })
    );
  };

  const deleteProductFromCart = (key, value) => {
    setCarts(carts.filter((e) => e[key] !== value));
  };

  return {
    carts,
    setCarts,
    addCart,
    checkExist,
    updateOldIncrement,
    updateObjKey,
    deleteProductFromCart,
  };
};

export default useCart;
