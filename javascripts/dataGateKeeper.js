const movieLoad = require('./movie');

// const catOnLoad = function () {
//   // const categoryData = JSON.parse(this.responseText).categories;
//   // data.setCategories(categoryData);
// };

const onLoad = function () {
  // const movieData = JSON.parse(this.responseText).movie;
  // data.setMovies(movieData);
};

const noLoad = function () {
  console.log('Cannot Load');
};

const success = () => {
  movieLoad(onLoad, noLoad);
};

module.exports = success;
