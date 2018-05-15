const data = require('./data');

const updateBudget = (elements) => {
  let domString = '';
  let sum = 0;
  let theBudget = 0;
  theBudget = document.getElementById('enterAmount').value * 1;
  elements.forEach((element) => {
    domString += `<div class="budget-item">`;
    domString += `<p>${element.name}: ${element.cost}</p>`;
    domString += `</div>`;
    sum = sum + (element.cost * 1);
  });
  theBudget = theBudget - sum;
  printBudget('cost', domString);
  document.getElementById('budget').innerHTML = '$' + theBudget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const printBudget = (divId, string) => {
  document.getElementById(divId).innerHTML = string;
  data.costTotal();
};

const canYouMakeMovie = () => {

  // Get Remaining Budget from budget div
  let remainingBudget = document.getElementById('budget').innerHTML;
  // convert $ to number
  remainingBudget = remainingBudget(currency.replace(/[^0-9\.-]+/g, ''));

  // if budget < 0 return False:  No need to check to see if items in each cat are selected
  if (remainingBudget < 0) {
    return "You cannot afford to make movie with that budget!!";
  } else {
    // check to see if something is checked in each category
    // create counter for each category (I cannot remember all the categories so you will have to add them)
    let actors = 0;
    let locations = 0;
    let directors = 0;

    // create variables for checkbox loop
    let movieCategory = 0;
    let movieId = 0;
    let currentCheckbox = '';

    // loop through all movies and count checked for each category (variable names are wrong)
    movieData.forEach((movie) => {
      movieCategory = movie.categoryId;
      movieId = movie.Id;
      currentcheckbox = document.getElementById('cat' + movieId);

      // if checkbox is checked, determine category and add to corresponding counter
      if (currentCheckbox.checked) {

        switch (MovieCategory) {
          case '1':  // category id for actors
            actors++;  // add one to actors count
            break;
          case '2':  // category id for locations
            locations++;  // add one to locations count
            break;
          case '3':  // category id for actors
            directors++;  // add one to directors count
            break;
        }

      } // end if checked

    });  // continue for each loop

    // done:  now check to see if something is checked in each category (every counter > 0)
    if (actors > 0 && locations > 0 && directors > 0) {
      // you can make movie (already passed budget test above)
      return 'You can afford to make this movie!';
    } else {
      return 'You cannot make this movie without checking something in each category!';
    }

  }

};

module.exports = updateBudget;
