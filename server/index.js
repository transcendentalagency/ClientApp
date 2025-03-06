import express from "express";
const app = express();

const port = 5500 || import.meta.env.VITE_port;

app.use(express.json());

app.listen(port, () => {
  console.log("server running on: ", port);
});
