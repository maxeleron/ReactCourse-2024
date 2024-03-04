const maxTransaction = 29999;
const moneyInput = document.getElementsByClassName('money-input-contenteditable')[0];
const moneyInputBlock = document.getElementsByClassName('money-input-block')[0];


// MoneyInput will only take numbers
moneyInput.addEventListener('keypress', function(e) {
    // allowing to type only the numbers
    if (isNaN(String.fromCharCode(e.which)) || moneyInput.textContent.length > 5)
        e.preventDefault();

    // removing Zero from the beggining of the string
    // moneyInput.textContent = parseInt(moneyInput.textContent);

    // removing class 'empty'
    if (parseInt(moneyInput.textContent) > 3){
        moneyInputBlock.classList.remove('empty');
        moneyInputBlock.classList.remove('incorrect');
    }

    if (parseInt(moneyInput.textContent) < 3)
        moneyInputBlock.classList.add("incorrect");

    if (parseInt(moneyInput.textContent) == 0)
        moneyInputBlock.classList.add("empty");

    // setting max to input
    if (parseInt(moneyInput.textContent) > maxTransaction)
        moneyInput.textContent = maxTransaction;
});
