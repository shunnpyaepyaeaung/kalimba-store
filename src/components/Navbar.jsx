import React from "react";
import { NavLink } from "react-router-dom";
import useProductContext from "../contexts/useProductContext";
import CartCount from "../pages/CartCount";

const Navbar = () => {
  const { allcategories, setChosenCategory } = useProductContext();
  return (
    <nav id="nav">
      <div className="nav-brand">
        <h1>Euphony</h1>
      </div>
      <div className="nav-items">
        <NavLink to="/" exact activeClassName="active-link">
          Product
        </NavLink>
        <NavLink to="/cart" activeClassName="active-link">
          Cart
        </NavLink>
        <div className="ui compact menu">
          <div className="ui simple dropdown item">
            Categories
            <i className="dropdown icon" />
            <div className="menu">
              {allcategories.map((cat, i) => {
                return (
                  <NavLink to="/category">
                    <div
                      key={i}
                      onClick={(e) => setChosenCategory(e.target.innerText)}
                      className="item"
                    >
                      {cat.name}
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <CartCount />
    </nav>
  );
};

export default Navbar;
