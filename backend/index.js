require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db");

connection();
// middlewares:
app.use(express.json);
app.use(cors);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App running on port ${port}`));
