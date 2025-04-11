const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const careersRoutes = require("./routes/careers");

app.use("/careers", careersRoutes);

app.listen(port, () => {
  console.log("Server started");
})