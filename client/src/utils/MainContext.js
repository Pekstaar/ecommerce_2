import { createContext, useState } from "react";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([
    // {
    //   img: "https://asset.conrad.com/media10/isa/160267/c1/-/en/002239613PI00/image.jpg",
    //   name: "HUAWEI Laptop Matebook",
    //   quantity: 1,
    //   price: 32000,
    // },
    // {
    //   id: 2,
    //   img: "https://asset.conrad.com/media10/isa/160267/c1/-/en/002239613PI00/image.jpg",
    //   name: "HUAWEI Laptop Matebook",
    //   quantity: 1,
    //   price: 32000,
    // },
  ]);

  return (
    <Context.Provider
      value={{
        productsInCart,
        setProductsInCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
