const Author = require("../model/author");
const asyncHandler = require("express-async-handler");

const getAuthorData = asyncHandler(async (req, res) => {
  const author = await Author.find();

  res.status(200).json({
    status: "success",
    data: author.length,
    AuthorData: author,
  });
});

const createAuthor = asyncHandler(async (req, res) => {
  const Authordata = await Author.create(req.body);
  res.status(201).json({
    status: "success",
    data: Authordata,
  });
});

const UpdateAuthor = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const data = await Author.findByIdAndUpdate(id, req.body, {
    new: true,
    runvalidator: true,
  });
  res.status(200).json({
    status: "success",
    msg: `author data of ${id} is updated`,
    data,
  });
});

const deleteAuthor = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const data = await Author.findByIdAndDelete(id);
  res.status(200).json({
    status: "success",
    msg: `author data of ${id} is deleted successfully`,
  });
});

module.exports = {
  getAuthorData,
  createAuthor,
  UpdateAuthor,
  deleteAuthor,
};
