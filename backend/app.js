const express = require("express");
const mongoose = require("mongoose");
const http = require("http");

const wordRouter = require("./routes/wordrouter");

mongoose.connect(
  "mongodb+srv://msanjay05:" +
    process.env.MONGODBPASS +
    "@cluster0.xthnt.mongodb.net/incubyte?retryWrites=true&w=majority"
);

const app = express();

app.use(express.json());
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.use("/api/words", wordRouter);

const port = process.env.PORT || "3000";
app.set("port", port);

const server = http.createServer(app);
server.listen(port);
