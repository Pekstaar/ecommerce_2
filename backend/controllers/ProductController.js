const Product = require("../models/Product");

module.exports.getProducts = async (_, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.createProduct = async (req, res) => {
  try {
    const newProduct = await new Product({
      name: req.body.p_name,
      description: req.body.p_description,
      price: req.body.p_price,
      category: req.body.p_category,
    });

    const product = await newProduct.save();

    req.body.p_img.forEach((img) => product.images.push(img));

    await product.save();

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const productUpdate = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.p_name,
        description: req.body.p_description,
        price: req.body.p_price,
        category: req.body.p_category,
        amount: req.body.p_amount,
      },
      { new: true }
    );

    const product = await productUpdate.save();

    req.body.p_img.forEach((img) => product.images.push(img));

    await product.save();

    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    return res.status(200).json({ messge: "Product deleted successfully!" });
  } catch (error) {
    res.status(500).json(error);
  }
};
