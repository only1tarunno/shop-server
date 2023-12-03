require("dotenv").config();
const mongoose = require("mongoose");

const getConnectionString = () => {
  let connectionUrl;
  connectionUrl = process.env.DATABASE_PROD;
  connectionUrl = connectionUrl.replace(
    "<username>",
    process.env.DATABASE_USERNAME
  );
  connectionUrl = connectionUrl.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
  );

  return connectionUrl;
};

const connectDB = async () => {
  console.log("connectting to database");
  const mongoURI = getConnectionString();

  await mongoose.connect(mongoURI, { dbName: process.env.DB_NAME });
  console.log("connected to database");
};

module.exports = connectDB;
