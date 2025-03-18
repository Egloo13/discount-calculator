

// parcent calculation
let inputAmount = document.getElementById('main-amount'),
    inputDiscount = document.getElementById('discount-amount'),
    finalBalance = document.getElementById('taka');

document.getElementById('btn-click').addEventListener('click', () => {
    let principal = parseFloat(inputAmount.value),
        discount = parseFloat(inputDiscount.value);

    if (principal > 0 && discount > 0) {
        finalBalance.innerText = (principal * (discount / 100)).toFixed(2);
    } else alert('Please enter valid amount.');
});

document.getElementById('clear-btn').addEventListener('click', () => {
    [inputAmount.value, inputDiscount.value, finalBalance.innerText] = ['', '', '0.0'];
});

// disconnect calculator




