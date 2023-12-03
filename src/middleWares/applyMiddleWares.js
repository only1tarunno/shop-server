const express = require("express");
const cors = require("cors");

const applyMiddleWares = (app) => {
  // middleware
  app.use(cors());
  app.use(express.json());
};

module.exports = applyMiddleWares;
