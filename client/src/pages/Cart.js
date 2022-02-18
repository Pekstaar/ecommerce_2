import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Context } from "../utils/MainContext";

const Cart = () => {
  const { productsInCart } = useContext(Context);

  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [vat, setVat] = useState(0);
  const total = subTotalPrice + shippingFee + vat;

  useEffect(() => {
    if (productsInCart.length > 0) {
      let total = 0;
      productsInCart.forEach((product) => {
        total += product.price;
      });
      setSubTotalPrice(total);
      setShippingFee(productsInCart && 150 * productsInCart.length);
      setVat(Math.floor(total && 0.07 * total));
      // setTotal(subTotalPrice + shippingFee + vat);
    } else {
      setSubTotalPrice(0);
      setShippingFee(productsInCart && 150 * productsInCart.length);
      setVat(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsInCart]);

  return (
    <>
      <Navigation />
      <div className="container-md  my-2" style={{ minHeight: "79%" }}>
        <div className="row row-cols-lg-2">
          <div className="col-lg-8">
            <table className="table">
              <thead className="table-secondary ">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              {productsInCart.length < 1 ? (
                <tbody className="p-3 bg-light col-12 mx-auto">
                  <tr>
                    <td>Empty cart</td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {productsInCart.map((_prod) => (
                    <CartItem
                      key={_prod.id}
                      img={_prod.img}
                      name={_prod.name}
                      quantity={_prod.quantity}
                      price={_prod.price}
                      id={_prod.id}
                    />
                  ))}
                </tbody>
              )}
            </table>
          </div>

          <div className="col-lg-4 bg-light p-4">
            {/* title */}
            <div className="border-bottom border-dark border-2 p-3">
              <span className="fs-5 text-dark">SUMMARY</span>
            </div>
            {/* total */}
            <div className=" border-bottom border-dark border-2 p-3 d-flex flex-column gap-3">
              <div className="d-flex justify-content-between">
                <span className="fs-5">SUBTOTAL</span>
                <span className="">kshs {subTotalPrice}</span>
              </div>
              <div className="d-flex justify-content-between text-secondary">
                <span className="txt-sm ">Shipping Fee</span>
                <span className="">kshs {shippingFee}</span>
              </div>

              <div className="d-flex justify-content-between text-secondary">
                <span className="txt-sm ">VAT</span>
                <span className="">kshs {vat}</span>
              </div>
            </div>

            <div className=" border-bottom border-dark border-2 p-3 d-flex flex-column gap-3">
              <div className="d-flex justify-content-between">
                <span className="fs-5">Total</span>
                <span className="">kshs {total}</span>
              </div>
            </div>
            {/* need help */}
            {/* button */}
            <div className="d-flex py-4 border-2 border-dark border-bottom">
              <button className="btn btn-dark py-2 px-5 col-10 mx-auto">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const CartItem = ({ img, price, quantity, name, id }) => {
  const { productsInCart, setProductsInCart } = useContext(Context);

  const removeItemFromCart = () => {
    var newArray = productsInCart.filter(function (el) {
      return el.id !== id;
    });

    setProductsInCart(newArray);
  };

  return (
    <tr className="align-items-center">
      <td className="d-flex align-items-center gap-3  ">
        {/* delete button */}
        <button
          className="btn btn-danger btn-outline rounded-circle "
          style={{ height: "42px" }}
          onClick={removeItemFromCart}
        >
          <i className="bi bi-trash-fill"></i>
        </button>
        &nbsp;&nbsp;
        {/* image */}
        <img
          src={img}
          alt="laptop"
          height="60px"
          width="60px"
          style={{ objectFit: "contain" }}
        />
        {/* text */}
        {/* <div style={{ flexGrow: 1 }}>{HUAWEI Laptop Matebook}</div> */}
        <div style={{ flexGrow: 1 }}>{name}</div>
      </td>
      <td className="col-md-1 txt-green pt-4 ">{price}</td>
      <td className="col-md-3 bg-white pt-3">
        <div className="d-flex">
          <button className="btn btn-light me-1 border p-2 px-3 rounded-0">
            -
          </button>
          <button className="btn btn-light me-1 border border-dark p-2 px-3 rounded-0">
            {quantity}
          </button>

          <button className="btn btn-light me-1 border p-2 px-3 rounded-0">
            +
          </button>
        </div>
      </td>
      <td className="col-md-1 txt-green pt-4">{price * quantity}</td>
    </tr>
  );
};

export default Cart;
