const env = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productsRouter = require("./routes/productRouter.js");
const usersRouter = require("./routes/userRouter.js");

mongoose
  .connect(process.env.CONNECTION_STRING, {})
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => console.log({ err: err.message }));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/products", productsRouter);

app.use("/users", usersRouter);

app.listen(8080, () => {
  console.log("listening on http://localhost:8080");
});
