const maxTransaction = 29999;
const moneyInput = document.getElementsByClassName('money-input-contenteditable')[0];


// MoneyInput will only take numbers
moneyInput.addEventListener('keypress', function(e) {
    // allowing to type only the numbers
    if (isNaN(String.fromCharCode(e.which)) || moneyInput.textContent.length > 5)
        e.preventDefault();

    // removing Zero from the beggining of the string
    moneyInput.textContent = parseInt(moneyInput.textContent);

    // setting max to input
    if (parseInt(moneyInput.textContent) > maxTransaction)
        moneyInput.textContent = maxTransaction;
});
