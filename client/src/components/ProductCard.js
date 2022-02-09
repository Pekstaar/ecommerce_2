import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ src, price }) => {
  return (
    <div className="col mb-5 ">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src={src}
          alt="..."
          height="150"
          style={{ objectFit: "cover" }}
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">Fancy Product</h5>
            {/* <!-- Product price--> */}
            {price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <Link className="btn btn-outline-warning text-dark mt-auto" to="/">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
