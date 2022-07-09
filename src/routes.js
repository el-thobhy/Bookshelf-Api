const { addBookHandler, getAllBookHandler, getBookDetailHandler, editDetailHandler } = require('./handler');

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
];

module.exports = routes;
