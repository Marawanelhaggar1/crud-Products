const productsSchema = require("../schemas/product.js");

exports.getProduct = async (req, res) => {
  const results = await productsSchema.find({}).catch((err) => {
    return { err: err.message };
  });
  res.send(results || "no products found");
};

exports.addProducts = async (req, res) => {
  const product = new productsSchema(req.body);

  const data = await product.save().catch((err) => {
    return { err: err.message };
  });

  res.send(data);
};
