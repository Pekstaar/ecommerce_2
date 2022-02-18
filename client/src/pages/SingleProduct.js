import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Context } from "../utils/MainContext";

const SingleProduct = () => {
  const url = window.location.pathname.split("/");
  const currentId = url[1];
  const { productsInCart, setProductsInCart } = useContext(Context);

  const [productDetails, setProductDetails] = React.useState({});
  const [currentImage, setCurrentImage] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const setImage = (i) => {
    setCurrentImage(i);
  };

  const productExists = (id) => {
    return productsInCart.some(function (el) {
      return el.id === id;
    });
  };
  const addItemToCart = () => {
    const product = {
      id: productDetails._id,
      img: productDetails.images[0],
      name: productDetails.name,
      quantity: 1,
      price: productDetails.price,
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
      return el.id !== productDetails._id;
    });

    setProductsInCart(newArray);
  };

  useEffect(() => {
    const getSingleProduct = async () => {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/products/${currentId}`
      );

      setProductDetails(response.data);
      setLoading(false);
    };

    getSingleProduct();
  }, [currentId]);

  return (
    <>
      <Navigation />
      <div className="container-md  my-2  " style={{ minHeight: "79%" }}>
        {loading ? (
          <span className="text-center mt-5 fs-3 fw-normal">Loading . . .</span>
        ) : (
          <div className="row row-cols-2  p-2" style={{ minHeight: "600px" }}>
            {/* section1 */}
            <div className="col-md-6  ">
              {/* Main image */}
              <div className="">
                <img
                  src={
                    productDetails.images && productDetails.images[currentImage]
                  }
                  alt=""
                  height="500px"
                  width="100%"
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* subimages */}
              <div className="subimages d-flex gap-3 my-3">
                {productDetails.images &&
                  productDetails.images.map((_image, _index) => (
                    <img
                      src={_image}
                      key={_index}
                      alt=""
                      height="80px"
                      width="100px"
                      style={{ objectFit: "cover", cursor: "pointer" }}
                      className="border p-1"
                      onClick={() => setImage(_index)}
                    />
                  ))}
              </div>
            </div>

            {/* section 2 */}
            <div className="col-md-6 bg-light p-5 d-flex flex-column gap-2">
              {/* Title */}
              <h5 className="fs-4" style={{ textDecoration: "underline" }}>
                {productDetails.name && productDetails.name}
              </h5>
              {/* price */}
              <div className="description">
                <span className="fs-5 fw-md">Kshs: {productDetails.price}</span>
              </div>
              {/* description */}
              <div style={{ minHeight: "150px" }}>
                {productDetails.description}
              </div>
              {/* quantity */}
              <div className="quantity d-flex gap-3 align-items-center">
                quantity:
                <div
                  className="bg-white rounded px-1 d-flex align-items-center justify-content-center"
                  style={{ height: "50px", minWidth: "50px" }}
                >
                  {productDetails.amount}
                </div>
              </div>
              {/* buttons */}
              <div className="buttons d-flex gap-3 align-items-center">
                {productExists(productDetails && productDetails._id) ? (
                  <button
                    className="btn btn-outline-danger text-dark mt-auto "
                    // to="/"
                    onClick={removeItemFromCart}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-dark"
                    // to="/"
                    onClick={addItemToCart}
                  >
                    Add to Cart
                  </button>
                )}
                {/* <Link to="/cart" className="" type="submit">
                  <button className="btn btn-outline-dark">Add to Cart</button>
                </Link> */}

                <Link to="/" className="">
                  <button className="btn btn-dark py-2 px-4">Back</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
