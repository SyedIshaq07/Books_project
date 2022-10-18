const mongoose = require("mongoose");
const Author = require("../model/author");

const booksSchema = new mongoose.Schema({
  BookName: {
    type: String,
    required: [true, "please provide book name"],
  },
  description: {
    type: String,
    required: [true, "please provide book description"],
  },
  author_ID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: Author,
  },
});

const Books = new mongoose.model("Books", booksSchema);

module.exports = Books;
