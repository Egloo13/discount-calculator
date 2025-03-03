let inputAmount = document.getElementById('main-amount');
let inputDiscount = document.getElementById('discount-amount');
let inputPercent = document.getElementById('percent-amount');
let finalBalance = document.getElementById('taka');




function calculateInterest() {
  let principal = parseFloat(inputAmount.value);
  let discount = parseFloat(inputDiscount.value);
  let totalBalance = parseFloat(finalBalance.innerText);
  if (!isNaN(discount) && !isNaN(principal) && discount > 0 && principal > 0) {
    let interest = principal * (discount / 100);
    finalBalance.innerText = (totalBalance + interest).toFixed(2);
    document.getElementById('btn-click').disabled = true;
  } else {
    alert('Please enter valid amount.');
  }
};

document.getElementById('btn-click').addEventListener('click', calculateInterest);

document.getElementById('clear-btn').addEventListener('click', function() {
  inputAmount.value = '';
  inputDiscount.value = '';
  finalBalance.innerText = '0.0';
  document.getElementById('btn-click').disabled = false;
});


