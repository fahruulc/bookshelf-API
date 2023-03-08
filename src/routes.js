import {
  addBookShelfHandler,
  getAllBooksHandler,
  getBookById,
  updateBookById,
  deleteBookById,
} from "./handler.js";

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookShelfHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookById,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: updateBookById,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookById,
  },
];

export default routes;
