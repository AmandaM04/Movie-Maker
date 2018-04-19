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
