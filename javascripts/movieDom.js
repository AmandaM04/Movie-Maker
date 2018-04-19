const outputDiv = document.getElementById('mv-elements');

const domString = (moviesArray) => {
  let domString = '';
  moviesArray.forEach((movie) => {
    domString += `<div class="row">`;
    domString +=  `<div class="col-sm-3">`;
    domString +=   `<div class="panel panel-default">`;
    domString +=    `<div class="panel-body">`;
    domString +=     `<h3 class="panel-title" data-movies-id="${movie.id}">${movie.name}</h3>`;
    domString +=    `</div>`;
    domString +=   `</div>`;
    domString +=  `</div>`;
    domString += `</div>`;
  });
  return domString;
};

const printMoviesToDom = (moviesArray) => {
  outputDiv.innerHTML = domString(moviesArray);
};

module.exports = printMoviesToDom;
