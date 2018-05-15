const data = require('./data');

const setBudget = () => {
  const setAmount = document.getElementById('setAmount');
  setAmount.addEventListener('click', function (e) {
    const enterAmount = document.getElementById('enterAmount').value;
    data.setNewBudget(enterAmount);
    document.getElementById('budget').innerHTML = '$' + enterAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  });
};

module.exports = setBudget;
