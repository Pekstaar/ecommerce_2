const {
  getProducts,
  createProduct,
  updateProduct,
} = require("../controllers/ProductController");
const router = require("express").Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);

module.exports = router;
