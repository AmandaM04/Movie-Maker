// const movieLoad = require('./movie');
// const movieDom = require('./movieDom');
const categoryLoad = require('./categories');
const printCategoriesToDom = require('./categoryDom');
const data = require('./data');

const catOnLoad = function () {
  const categoryData = JSON.parse(this.responseText).categories;
  data.setCats(categoryData);
  printCategoriesToDom(categoryData);
};

// const onLoad = function () {
//   const movieData = JSON.parse(this.responseText).movie;
//   data.setMovies(movieData);
//   movieDom(movieData);
// };

const noLoad = function () {
  console.log('Cannot Load');
};

const success = () => {
  // movieLoad(catOnLoad, noLoad);
  categoryLoad(catOnLoad, noLoad);
};

module.exports = success;
