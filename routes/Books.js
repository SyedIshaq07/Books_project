const express = require("express");
const router = express.Router();
const {
  getBooks,
  createBooks,
  UpdateBook,
  DeleteBook,
} = require("../controller/books");

router.route("/").get(getBooks).post(createBooks);
router.route("/:id").patch(UpdateBook).delete(DeleteBook);

module.exports = router;
