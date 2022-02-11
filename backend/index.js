require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db");

const productRoute = require("./routes/product");
const categoryRoute = require("./routes/category");

connection();
// middlewares:
app.use(express.json());
// app.use(cors);

app.use("/api/products", productRoute);
app.use("/api/categories", categoryRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App running on port ${port}`));
