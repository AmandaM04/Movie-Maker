const data = require('./data');
const updateBudget = require('./budgetWindow');
// const getShit = require('./progressBar');

const checkBoxes = document.getElementsByClassName('checkIt');
let elements = [];

const checkEvent = () => {
  for (let i = 0; i < checkBoxes.length; i ++) {
    checkBoxes[i].addEventListener('change', function (e) {
      if (this.checked) {
        addCompareMovieArray(e);
      } else {
        removeElements(e);
      }
    });
  };
};

const addCompareMovieArray = (e) => {
  console.log('e:', e);
  const checkboxId = e.target.id;
  const movieElemArray = data.getMovies();
  movieElemArray.forEach((element) => {
    if (element.id === checkboxId) {
      elements.push(element);
      data.setCurrentCost({cost: element.cost, id: element.id,});
      // getShit();
    }
  });
  updateBudget(elements);
  // progressBarUpdate(elements);
};

const removeElements = (e) => {
  const checkboxId = e.target.id;
  elements = elements.filter(e => e.id !== checkboxId);
  data.removeCurrentCost(checkboxId);
  // getShit();
  updateBudget(elements);
  // progressBarUpdate(elements);
};

module.exports = checkEvent;
