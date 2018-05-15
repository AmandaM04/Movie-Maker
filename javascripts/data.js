let movies = [];
let categories = [];
let budget = 0;
let currentCost = [];

const getMovies = () => {
  return movies;
};

const setMovies = (moviesArray) => {
  movies = moviesArray;
};

const getCats = () => {
  return categories;
};

const setCats = (categoriesArray) => {
  categories = categoriesArray;
};

const setNewBudget = (newBudget) => {
  budget = newBudget;
};

const getNewBudget = () => {
  return budget;
};

const setCurrentCost = (newCost) => {
  console.log('New cost to add', newCost);
  currentCost.push(newCost);
};

const removeCurrentCost = (idToRemove) => {
  console.log('ID to remove', idToRemove);
  currentCost = currentCost.filter(c => c.id !== idToRemove);
};

const getCurrentCost = () => {
  return currentCost;
};

const costTotal = () => {
  return currentCost.reduce((totalCost, currentCost) => {
    return totalCost + currentCost.cost;
  }, 0);
};

module.exports = {
  getCats,
  setCats,
  getMovies,
  setMovies,
  setNewBudget,
  getNewBudget,
  setCurrentCost,
  removeCurrentCost,
  getCurrentCost,
  costTotal,
};
