// Setting constant numeric values
const minTransaction = 10;
const maxTransaction = 29999;
const currencySymbol = ' ₴';

// Getting UI elements
const moneyInput = document.getElementsByClassName('money-input-contenteditable')[0];
moneyInput.textContent = +localStorage.getItem("userInput") || 0;;
const moneyInputBlock = document.getElementsByClassName('money-input-block')[0];
// Increment buttons
const add100 = document.getElementsByClassName('chip-button')[0];
const add500 = document.getElementsByClassName('chip-button')[1];
const add1000 = document.getElementsByClassName('chip-button')[2];
// Pay buttons
const monoPayButton = document.getElementsByClassName('mono-pay')[0];
const gPayButton = document.getElementsByClassName('tap-to-pay')[0];
// Jar stats
const accumulatedDisplay = document.getElementsByClassName('stats-data__value')[0];
const goalDisplay = document.getElementsByClassName('stats-data__value')[1];
// Jar stats variables
let accumulatedValue = +localStorage.getItem("accumulated") || 7700;
const goalValue = 250000;

// Function to format numbers, so they will be displayed with spaces every 3 digits
function formatNumber(nr) {
    return nr.toString()
      .split('')
      .reverse()
      .map((n, idx) => idx % 3 === 0 ? n + ' ' : n)
      .reverse()
      .join('')
      .trim();
}

function updateAccumulated() {
    const sum = accumulatedValue + parseInt(moneyInput.textContent);
    localStorage.setItem("accumulated", sum);

    accumulatedDisplay.textContent = formatNumber(accumulatedValue + +moneyInput.textContent) + currencySymbol;
}

// MoneyInput will only take numbers
moneyInput.addEventListener('keypress', function(e) {
    // allowing to type only the numbers
    if (isNaN(String.fromCharCode(e.which)) || moneyInput.textContent.length > 5)
        e.preventDefault();

    // removing Zero from the beggining of the string
    // moneyInput.textContent = parseInt(moneyInput.textContent);

    // removing class 'empty'
    if (parseInt(moneyInput.textContent) > minTransaction){
        moneyInputBlock.classList.remove('empty');
        moneyInputBlock.classList.remove('incorrect');
    }

    if (parseInt(moneyInput.textContent) < minTransaction)
        moneyInputBlock.classList.add("incorrect");

    if (parseInt(moneyInput.textContent) == 0)
        moneyInputBlock.classList.add("empty");

    // setting max to input
    if (parseInt(moneyInput.textContent) > maxTransaction)
        moneyInput.textContent = maxTransaction;

    // localStorage.setItem("userInput", moneyInput.textContent);
});

add100.addEventListener('click', function() {
    moneyInput.textContent = parseInt(moneyInput.textContent) + 100;
});

add500.addEventListener('click', function() {
    moneyInput.textContent = parseInt(moneyInput.textContent) + 500;
});

add1000.addEventListener('click', function() {
    moneyInput.textContent = parseInt(moneyInput.textContent) + 1000;
});

// Extracting 'Acumulated' value
// monoPayButton.addEventListener('click', updateAccumulated());

// Storing 'Acumulated' value
// add1000.addEventListener('click', updateAccumulated());
