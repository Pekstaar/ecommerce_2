import React, { useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    async function getProducts() {
      const products = await axios.get("http://localhost:5000/api/products");

      setProducts(products.data);
    }

    getProducts();
  }, []);

  return (
    <>
      <Navigation />
      <div className="container-md my-2" style={{ minHeight: "79%" }}>
        {/* Products */}
        <div className="p-4">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 ">
            {products.map((product, _index) => (
              <ProductCard
                src={product.images[0]} //0,1,2,3
                name={product.name}
                price={product.price}
                id={product._id}
                description={product.description}
                key={_index}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
