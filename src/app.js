require("dotenv").config();
const express = require("express");
const applyMiddleWares = require("./middleWares/applyMiddleWares");
const connectDB = require("./db/connectDb");
const app = express();
const port = process.env.PORT || 5000;

// routers
const authRoutes = require("./routes/Authentication/authentication");
const allproducts = require("./routes/AllProducts/AllProducts");
const allUsers = require("./routes/User/user");
const Carts = require("./routes/Cart/Cart");
const pay = require("./routes/Pay/Pay");
const starRating = require("./routes/starRating/starRating");
const categories = require("./routes/Categories/Categories");
const adminRoute = require("./routes/Admin/Admin");

// middlewares
applyMiddleWares(app);

// jwt related api
app.use(authRoutes);

// allProducts api
app.use(allproducts);

// user related api
app.use(allUsers);

// Admin related api
app.use(adminRoute);

// carts related api
app.use(Carts);

// payment related api
app.use(pay);

// rating related api
app.use(starRating);

// Category related api
app.use(categories);

// server health check api
app.get("/", (req, res) => {
  res.send("server is running");
});

// handling all (get,post,update,delete.....) unhandled routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find [${req.originalUrl}] on the server`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

module.exports = app;
// text
