import React from "react";
import Layout from "../components/Layout";
import useCartContext from "../contexts/useCartContext";

const Cart = () => {
  const { carts, updateObjKey, deleteProductFromCart } = useCartContext();
  return (
    <div>
      <Layout>
        <h1 className="product-title">Cart Page</h1>
        {carts.length > 0 ? (
          <>
            <table className="ui very basic collapsing celled table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((e, i) => {
                  return (
                    <>
                      <tr key={i}>
                        <td>
                          <h4 className="ui image header">
                            <img
                              src={e.image}
                              className="ui tiny rounded image"
                            />
                            <div className="content">{e.productName}</div>
                          </h4>
                        </td>
                        <td>${e.price}</td>
                        <td>
                          <input
                            value={e.quantity}
                            className="quantity"
                            type="number"
                            min="1"
                            onChange={(event) =>
                              updateObjKey(
                                "id",
                                e.id,
                                "quantity",
                                +event.target.value
                              )
                            }
                          />
                        </td>
                        <td>${e.quantity * e.price}</td>
                        <td>
                          <button
                            onClick={() => deleteProductFromCart("id", e.id)}
                            className="ui red button"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            <h1 className="subtotal">
              Sub Total: $
              {carts.reduce((sum, e) => {
                return sum + e.price * e.quantity;
              }, 0)}
            </h1>
          </>
        ) : (
          <h1 className="cart-title">Sorry, There is no item in the cart.</h1>
        )}
      </Layout>
    </div>
  );
};

export default Cart;
