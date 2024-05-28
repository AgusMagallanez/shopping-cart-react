import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "./NavbarComponent.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export const NavbarComponent = () => {
  const { shoppingList } = useContext(ShoppingCartContext);
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            Products
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/shopping-cart"
                  className="nav-link active"
                  aria-current="page"
                >
                  Shopping Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <NavLink className="cart-icon" to="/shopping-cart">
          <Badge badgeContent={shoppingList.length} color="primary">
            <ShoppingCart />
          </Badge>
        </NavLink>
      </nav>
    </>
  );
};
