const {
  createCategory,
  showCategories,
} = require("../controllers/CategoryController");

const router = require("express").Router();

router.post("/", createCategory);
router.get("/", showCategories);

module.exports = router;
