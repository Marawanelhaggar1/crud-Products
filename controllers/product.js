const productsSchema = require("../schemas/product.js");

exports.getProduct = async (req, res) => {
  const results = await productsSchema.find({}).catch((err) => {
    res.send({ err: err.message });
  });
  res.send(results || "no products found");
};

exports.getProductById = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const result = await productsSchema.findById({ _id: id });
    res.send(result || "product not found");
  } catch (err) {
    res.send("wrong id format");
  }
};

exports.addProducts = async (req, res) => {
  const product = new productsSchema(req.body);

  const data = await product.save().catch((err) => {
    res.send({ err: err.message });
  });

  res.send(data);
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await productsSchema.updateOne({ _id: id }, req.body);
    res.send(data);
  } catch (error) {
    res.send({ err: error.message });
  }
};

exports.deleteProducts = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await productsSchema.deleteOne({ _id: id });
    res.send(data);
  } catch (err) {
    res.send({ err: err.message });
  }
};
