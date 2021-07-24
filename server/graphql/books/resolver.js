const R = require('ramda');

const books = [
  {
    title: 'The Three-Body Problem',
    author: 'Liu Cixin',
  },
  {
    title: 'The Art of War',
    author: 'Sun Tzu',
  },
  {
    title: 'A Year of No Significance: The 15th Year of Wanli (Chinese Edition)',
    author: 'Ray Huang',
  },
];
module.exports = {
  Query: {
    books: () => {
      return books;
    },
    search: (parent, args) => {
      const term = R.pipe(R.prop('term'), R.toLower)(args);
      const matchTitle = (str) => R.pipe(R.prop('title'), R.toLower, R.includes(str));
      const filter = R.filter(matchTitle(term));
      return filter(books);
    },
  },
};
