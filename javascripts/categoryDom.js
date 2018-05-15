const outputDiv = document.getElementById('packages');

const domString = (categoriesArray) => {
  let domString = '';
  categoriesArray.forEach((category) => {
    domString += `<div id='cat${category.id}'>`;
    domString += `<h4>${category.categoryName}</h4>`;
    domString += `</div>`;
    domString += `<div class='clearfix'></div>`;
  });
  return domString;
};

const printCategoriesToDom = (categoriesArray) => {
  outputDiv.innerHTML = domString(categoriesArray);
};

module.exports = printCategoriesToDom;
