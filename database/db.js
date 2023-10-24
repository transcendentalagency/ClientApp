const mongoose = require("mongoose");

// mongoURI will change to real DB after development
const mongoURI = "mongodb://127.0.0.1:27017/clientApp";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connection to MongoDB
mongoose
  .connect(mongoURI, options)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
