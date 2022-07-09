const {
  addBookHandler,
  getAllBookHandler,
  getBookDetailHandler,
  editDetailHandler,
  deleteBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookDetailHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editDetailHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
