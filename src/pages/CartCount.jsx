import React from "react";
import useCartContext from "../contexts/useCartContext";

const CartCount = () => {
  const { carts } = useCartContext();
  return (
    <div className="cart-count">
      <i className="shopping bag icon"></i>
      <span id="count">{carts.length}</span>
    </div>
  );
};

export default CartCount;
