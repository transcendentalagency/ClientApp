const express = require("express"); // Node.js framework
const app = express();
require("../database/db");
const cors = require("cors"); // middleware

const authRoutes = require("./routes/authRoute");

const port = 4000; // port running

app.use(cors()); // adds middleware to app
app.use(express.json()); // body parser

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server on port: ${port}`);
}); // listening to port 4000
