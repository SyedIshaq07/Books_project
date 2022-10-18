const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const BooksRouter = require("./routes/Books");
const AuthorRouter = require("./routes/Author");

const app = express();

// db
const db = process.env.DB;
mongoose.connect(db, {});

// middleware

app.use(express.json());

app.use("/api/v1/books", BooksRouter);
app.use("/api/v1/author", AuthorRouter);

// server

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
