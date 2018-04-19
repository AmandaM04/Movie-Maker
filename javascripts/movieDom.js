const outputDiv = document.getElementById('packages');

const domString = (moviesArray) => {
  let domString = '';
  moviesArray.forEach((movie) => {
    domString += `<h4 data-movie-id"${movie.id}">${movie.name}</h4>`;
  });
  return domString;
};

const printMoviesToDom = (moviesArray) => {
  outputDiv.innerHTML = domString(moviesArray);
};

module.exports = printMoviesToDom;
