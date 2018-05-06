const movieLoad = require('./movie');
const printMoviesToDom = require('./movieDom');
const categoryLoad = require('./categories');
const printCategoriesToDom = require('./categoryDom');
const data = require('./data');

const catOnLoad = function () {
  const categoryData = JSON.parse(this.responseText).categories;
  data.setCats(categoryData);
  printCategoriesToDom(categoryData);
};

const mvOnLoad = function () {
  const movieData = JSON.parse(this.responseText).movies;
  data.setMovies(movieData);
  printMoviesToDom(movieData);
};

const noLoad = function () {
  console.log('Cannot Load');
};

const success = () => {
  categoryLoad(catOnLoad, noLoad);
  movieLoad(mvOnLoad, noLoad);
};

module.exports = success;
