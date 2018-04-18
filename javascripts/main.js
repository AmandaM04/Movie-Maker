const movieLoad = require('./movie');

const onLoad = function () {
  // const movieData = JSON.parse(this.responseText).movie;
};

const noLoad = function () {
  console.log('Cannot Load');
};

const success = () => {
  movieLoad(onLoad, noLoad);
};

module.exports = success;
