const Product = require("../schemas/product.js");
const userSchema = require("../schemas/users.js");

exports.getUsers = async (req, res) => {
  const data = await userSchema.find().catch((err) => {
    return { err: err.message };
  });
  res.send(data);
};

exports.addusers = async (req, res) => {
  const user = new userSchema(req.body);

  const data = await user.save().catch((err) => {
    return { err: err.message };
  });

  res.send(data);
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await userSchema.updateOne({ _id: id }, req.body);
    res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await userSchema.deleteOne({ _id: id });
    res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
};

exports.addProductsToUser = async (req, res) => {
  const id = req.params.id;
  const productId = req.params.productId;

  try {
    const data = await userSchema.updateOne(
      { _id: id },
      { $addToSet: { products: productId } }
    );
    res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
};
