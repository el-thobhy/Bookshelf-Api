const {
  addBookHandler,
  getAllBookHandler,
  getBookDetailHandler,
  editBookDetailHandler,
  deleteBookHandler,
} = require('./handler');

const routes = [
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Halaman tidak ditemukan',
  },
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
    handler: editBookDetailHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
