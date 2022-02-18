import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../utils/MainContext";

const ProductCard = ({ src, price, name, id, description }) => {
  const { productsInCart, setProductsInCart } = useContext(Context);

  // console.log(productsInCart);

  const productExists = (id) => {
    return productsInCart.some(function (el) {
      return el.id === id;
    });
  };

  const addItemToCart = () => {
    const product = {
      id,
      img: src,
      name,
      quantity: 1,
      price,
    };

    if (!productExists(product.id)) {
      setProductsInCart((oldArray) => [...oldArray, product]);

      console.log(productsInCart);
    } else {
      return;
    }
  };

  const removeItemFromCart = () => {
    var newArray = productsInCart.filter(function (el) {
      return el.id !== id;
    });

    setProductsInCart(newArray);
  };

  return (
    <div className="col mb-5 text-dark ">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <Link to={`/${id}`}>
          <img
            className="card-img-top"
            src={src}
            alt="..."
            height="150"
            style={{ objectFit: "cover" }}
          />
        </Link>
        {/* <!-- Product details--> */}
        <div style={{ backgroundColor: "#efefef" }}>
          <div className="card-body p-4 ">
            <div className="text-left">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder " style={{ textDecoration: "none" }}>
                {name}
              </h5>
              {/* <!-- Product price--> */}
              kshs{price}
            </div>
            {/* description */}
            <div className="mt-2" style={{ fontSize: "14px" }}>
              {description.length > 36
                ? `${description.slice(0, 36)}...`
                : description}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center d-flex justify-content-around">
              <Link
                className="btn btn-primary text-dark mt-auto text-white"
                to={`/${id}`}
              >
                View
              </Link>
              {productExists(id) ? (
                <button
                  className="btn btn-outline-danger text-dark mt-auto "
                  // to="/"
                  onClick={removeItemFromCart}
                >
                  Remove
                </button>
              ) : (
                <button
                  className="btn btn-outline-warning text-dark mt-auto "
                  // to="/"
                  onClick={addItemToCart}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
