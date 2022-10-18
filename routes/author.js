const express = require("express");
const router = express.Router();
const {
  getAuthorData,
  createAuthor,
  UpdateAuthor,
  deleteAuthor,
} = require("../controller/author");

router.route("/").get(getAuthorData).post(createAuthor);

router.route("/:id").patch(UpdateAuthor).delete(deleteAuthor);

module.exports = router;
