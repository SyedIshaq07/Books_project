const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide author name"],
  },
  email: {
    type: String,
    required: [true, "please provide author email"],
    unique: true,
  },
  profession: {
    type: String,
    required: [true, "please provide author profession"],
  },
});

const Author = new mongoose.model("Author", authorSchema);

module.exports = Author;
