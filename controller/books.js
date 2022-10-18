const Books = require("../model/Books");
const asyncHandler = require("express-async-handler");

const getBooks = asyncHandler(async (req, res) => {
  const books = await Books.find();
  res.status(200).json({
    status: "success",
    books: books.length,
    data: books,
  });
});

const createBooks = asyncHandler(async (req, res) => {
  const data = await Books.create(req.body);
  res.status(201).json({
    status: "success",
    msg: "book created successfully",
    BookData: data,
  });
});

const UpdateBook = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const data = await Books.findByIdAndUpdate(id, req.body, {
    new: true,
    runvalidator: true,
  });
  res.status(200).json({
    status: "success",
    msg: `book data of ${id} is updated`,
    data,
  });
});

const DeleteBook = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const data = await Author.findByIdAndDelte(id);
  res.status(200).json({
    status: "success",
    msg: `book data of ${id} is deleted successfully`,
    data,
  });
});

module.exports = {
  getBooks,
  createBooks,
  UpdateBook,
  DeleteBook,
};
