import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductProvider from "./contexts/ProductProvider";
import Category from "./pages/Category";
import CartProvider from "./contexts/CartProvider";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <ProductProvider>
          <CartProvider>
            <Navbar />
            <Switch>
              <Route path="/" exact>
                <Products />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/category">
                <Category />
              </Route>
            </Switch>
            <Footer />
          </CartProvider>
        </ProductProvider>
      </Router>
    </div>
  );
};

export default App;
