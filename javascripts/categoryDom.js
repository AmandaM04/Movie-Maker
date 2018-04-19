const outputDiv = document.getElementById('packages');

const domString = (categoriesArray) => {
  let domString = '';
  categoriesArray.forEach((category) => {
    domString += `<h4 data-cat-id"${category.id}">${category.categoryName}</h4>`;
  });
  return domString;
};

const printCategoriesToDom = (categoriesArray) => {
  outputDiv.innerHTML = domString(categoriesArray);
};

module.exports = printCategoriesToDom;

// const catOutputDiv = document.getElementById('packages');

// const catDomString = (categories) => {
//   let domString = '';
//   categories.forEach((category) => {
//     domString += `<div class="col-sm-3 text-center">`;
//     domString +=  `<div class="panel panel-default">`;
//     domString +=   `<div class="panel-body">`;
//     domString +=    `<h3 class="panel-title" data-cat-id="${category.id}">${category.name}</h3>`;
//     domString +=   `</div>`;
//     domString +=  `</div>`;
//     domString += `</div>`;
//   });
//   return domString;
// };

// const printToDom = (categories) => {
//   catOutputDiv.innerHTML = catDomString(categories);
// };

// module.exports = printToDom;
