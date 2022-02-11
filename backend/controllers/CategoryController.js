const Category = require("../models/Category");

module.exports.createCategory = async (req, res) => {
  try {
    const newCategory = await new Category({
      name: req.body.c_name,
    });

    const cat = await newCategory.save();

    res.status(200).json({ data: cat });
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
};

module.exports.showCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).send(error);
  }
};
