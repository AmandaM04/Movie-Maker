
const checkEvent = require('./checkboxEvents');
const moviedomString = (movie) => {
  let moviedomString = '';
  // moviesArray.forEach((movie) => {
  moviedomString +=  `<div class="col-sm-3">`;
  moviedomString +=   `<div class="panel panel-default">`;
  moviedomString +=    `<div class="panel-body">`;
  moviedomString += `<div class="checkbox">`;
  moviedomString += `<label>`;
  moviedomString +=  `<input type="checkbox" class="checkIt" id="${movie.id}" value="${movie.cost}"> ${movie.name}`;
  moviedomString += `</label>`;
  moviedomString +=  `</div>`;
  moviedomString +=    `</div>`;
  moviedomString +=   `</div>`;
  moviedomString +=  `</div>`;
  // });
  return moviedomString;
};

const printMoviesToDom = (moviesArray) => {
  // loop over moviesArray
  moviesArray.forEach((movie) => {
    const outputDiv = document.getElementById(`cat${movie.categoryId}`);
    outputDiv.innerHTML += moviedomString(movie);
  });
  checkEvent();
};

module.exports = printMoviesToDom;
