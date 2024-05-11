const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const apiRouter = require("./routes/api");

const connectToDatabase = require('./database/connect');
const cors = require("./middlewares/cors.js");

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  cors,
  bodyParser.json(),
  apiRouter,
  express.static(path.join(__dirname, "public")),
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
