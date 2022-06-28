const express = require("express");
const app = express();
const morgan = require("morgan");

const productRoutes = require("./api/routes/products");
const orerRoutes = require("./api/routes/orders");

app.use(morgan("dev"));

app.use("/products", productRoutes);
app.use("/orders", orerRoutes);

module.exports = app;
