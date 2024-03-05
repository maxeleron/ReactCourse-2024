// Setting constant numeric values
const minTransaction = 10;
const maxTransaction = 29999;
const currencySymbol = ' ₴';

// Getting UI elements
const moneyInput = document.getElementsByClassName('money-input-contenteditable')[0];
moneyInput.textContent = localStorage.getItem("userInput") || 0;;
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
// User name and comment to store them in local storage (and output in Console.log)

// Widget buttons on bottom will be 'Reset' buttons, that will reverse all user data, and set 'Accumulated' to its initial state
const widgetButtons = document.getElementsByClassName('widget-button-icon');

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

// const updateAccumulated = function() {
//     const sum = accumulatedValue + parseInt(moneyInput.textContent);
//     localStorage.setItem("accumulated", sum);

//     accumulatedDisplay.textContent = formatNumber(sum) + currencySymbol;
//     console.log('Now accumulated: ' + sum + ', by adding ' + moneyInput.textContent);
//     moneyInput.textContent = 0;
//     accumulatedDisplay.textContent = formatNumber(accumulatedValue + +moneyInput.textContent) + currencySymbol;
// }

// MoneyInput will only take numbers
// moneyInput.addEventListener('keypress', function(e) {
moneyInput.addEventListener('keydown', function(e) {
    // allowing to type only the numbers
    if (isNaN(String.fromCharCode(e.which)) || moneyInput.textContent.length > 5)
        e.preventDefault();

    // removing Zero from the beggining of the string
    console.log('before ' + moneyInput.textContent);
    moneyInput.textContent = parseInt(moneyInput.textContent);
    console.log('after ' + moneyInput.textContent);

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

    localStorage.setItem("userInput", moneyInput.textContent);
});

add100.addEventListener('click', function() {
    moneyInput.textContent = parseInt(moneyInput.textContent) + 100;
});

add500.addEventListener('click', function() {
    moneyInput.textContent = parseInt(moneyInput.textContent) + 500;
});

add1000.addEventListener('click', function() {
    if ((parseInt(moneyInput.textContent) +1000) > maxTransaction)
        moneyInput.textContent = maxTransaction;
    else moneyInput.textContent = parseInt(moneyInput.textContent) + 1000;

    localStorage.setItem("userInput", moneyInput.textContent);

    moneyInputBlock.classList.remove('empty');
    moneyInputBlock.classList.remove('incorrect');
});

// Extracting 'Acumulated' value
[monoPayButton, gPayButton].forEach(function(element) {
    element.addEventListener('click', function(){
    //do not update accumulated if user entered less then minTransaction
    // if (parseInt(moneyInput.textContent) <= minTransaction) return;

    accumulatedValue += parseInt(moneyInput.textContent);
    localStorage.setItem("accumulated", accumulatedValue);

    accumulatedDisplay.textContent = formatNumber(accumulatedValue) + currencySymbol;
    console.log('Now accumulated: ' + accumulatedValue + ', by adding ' + moneyInput.textContent);
    
    // Resetting values of userInput
    moneyInput.textContent = 0;
    moneyInputBlock.classList.add('empty');
    localStorage.setItem("userInput", 0);
    });
});

// Resetting user data by clicking any of widget buttons at the bottom
[widgetButtons[0], widgetButtons[1]].forEach(function(element) {
    element.addEventListener('click', function(){
        alert('Click!');
        try {
            localStorage.removeItem(accumulated);
            localStorage.removeItem(userInput);
            localStorage.removeItem(userName);
            localStorage.removeItem(userComment);
        } catch {}
        console.log('All user date successfully deleted!')
    });
});

// widgetButtons.addEventListener('click', function(){
//         removeItem(userInput);
//         removeItem(accumulated);
//         removeItem(userName);
//         removeItem(userComment);
//         console.log('All user date successfully deleted!')
// });


