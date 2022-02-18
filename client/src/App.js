import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import { MainContext } from "./utils/MainContext";

function App() {
  return (
    <BrowserRouter>
      <MainContext>
        <div className="App " style={{ height: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </MainContext>
    </BrowserRouter>
  );
}

export default App;
