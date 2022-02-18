import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../utils/MainContext";

const Navigation = () => {
  const [active] = useState("home");
  const { productsInCart } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container px-4 py-2 px-lg-5">
        <Link className="navbar-brand" to="/">
          Tech-Store
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <ListItem active={active} title="Home" link="/" />

            <ListItem active={active} title="Products" link="/products" />

            <ListItem active={active} title="Profile" link="/profile" />
          </ul>
          <form className="d-flex">
            <Link to="/cart" className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {productsInCart.length}
              </span>
            </Link>

            <Link to="/signin" as="button" className="btn btn-primary ms-5">
              Signin
            </Link>
            <Link
              to="/signin"
              as="button"
              className="btn btn-outline-success ms-2"
            >
              Signup
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

const ListItem = ({ title, link, active }) => (
  <Link as="div" to={link} style={{ textDecoration: "none" }}>
    <li
      className={
        active.toLowerCase() === title.toLowerCase()
          ? `nav-item border-dark border-bottom `
          : "nav-item "
      }
    >
      <span
        className={
          active.toLowerCase() === title.toLowerCase()
            ? "nav-link text-dark"
            : "nav-link"
        }
        // to="#!"
      >
        {title}
      </span>
    </li>
  </Link>
);

export default Navigation;
