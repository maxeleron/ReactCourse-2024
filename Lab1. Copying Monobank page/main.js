// Setting constant numeric values
const minTransaction = 10;
const maxTransaction = 29999;
const initialAccumulated = 7700;
const goalValue = 250000;
const currencySymbol = ' ₴';

// MoneyInput elements
const moneyInput = document.getElementsByClassName('money-input-contenteditable')[0];
const moneyInputBlock = document.getElementsByClassName('money-input-block')[0];
// Getting userInput value from localStorage or defolting it ot '0'
moneyInput.textContent = localStorage.getItem("userInput") || 0;;
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
let accumulatedValue = +localStorage.getItem('accumulated') || initialAccumulated;
// User name and comment
const userNameInput = document.getElementsByClassName('inputF')[0];
userNameInput.value = localStorage.getItem('userName');
const userCommentInput = document.getElementsByClassName('inputF')[1];
userCommentInput.value = localStorage.getItem('userComment');
let userName = localStorage.getItem('userName') || 'Anonymous';
let userComment = localStorage.getItem('userComment');
// Small message that appears when user enters inputValue less then minTransaction
const transactionExplanation = document.getElementsByClassName('money-input-subtitle')[0];

// Jar img element
const jarGlassImg = document.getElementsByClassName('jar__glass')[0];
// Function to change Jar background
const jarGlassUpd = function(){
    const jarProgression = accumulatedValue/goalValue;
    if(jarProgression < 0.34) {
        jarGlassImg.src='https://send.monobank.ua/img/jar/uah_33.png';
    } else if (jarProgression < 0.55) {
        jarGlassImg.src='https://send.monobank.ua/img/jar/uah_50.png';
    } else {
        jarGlassImg.src='https://send.monobank.ua/img/jar/uah_100.png';
    }
}

// Function to add money via chip buttons
const addMoney = function(increment){
    // Comparing our input to maxTransaction value,
    // If input exeeds maxValue, we just set maxValue to input instead
    if ((parseInt(moneyInput.textContent) + increment) > maxTransaction)
        moneyInput.textContent = maxTransaction; 
    // If input value within accepted range, we add it to inputValue
    else moneyInput.textContent = parseInt(moneyInput.textContent) + increment;

    localStorage.setItem("userInput", moneyInput.textContent);

    // As we add either 100, 500 or 1000 our 'userInput' value will not be neither 'empty' nor 'incorrect'
    moneyInputBlock.classList.remove('empty');
    moneyInputBlock.classList.remove('incorrect');
    transactionExplanation.classList.add('hidden');

    // Update jar img, as we add money to it
    jarGlassUpd();
}

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

// MoneyInput will only take numbers
// moneyInput length is limited to 5 (as max value of transaction is 29.999)
moneyInput.addEventListener('keypress', function(e) {
    // allowing to type only the numbers
    if (isNaN(String.fromCharCode(e.which)) || moneyInput.textContent.length > 5)
        e.preventDefault();
});

add100.addEventListener('click', function() {
    addMoney(100);
});

add500.addEventListener('click', function() {
    addMoney(500);
});

add1000.addEventListener('click', function() {
    addMoney(1000);
});

// Extracting 'Acumulated' value
[monoPayButton, gPayButton].forEach(function(element) {
    element.addEventListener('click', function(){
    // do not update accumulated if user entered less then minTransaction
    if (parseInt(moneyInput.textContent) <= minTransaction) return;

    accumulatedValue += parseInt(moneyInput.textContent);
    localStorage.setItem('accumulated', accumulatedValue);

    accumulatedDisplay.textContent = formatNumber(accumulatedValue) + currencySymbol;
    console.log(`Transaction [${new Date().toLocaleTimeString()}]
  User: ${userNameInput.value}; Comment: ${userCommentInput.value || '(silent)'};
  Payment: ${moneyInput.textContent};

  Now accumulated: ${accumulatedValue}`);

    // Resetting values of userInput
    moneyInput.textContent = 0;
    moneyInputBlock.classList.add('empty');
    localStorage.setItem("userInput", 0);
    // Reseting userName and userComment, as we completed the transaction with these credentials
    localStorage.removeItem('userName');
    localStorage.removeItem('userComment');
    userNameInput.value = '';
    userCommentInput.value = '';

    jarGlassUpd();
    });
});

moneyInput.addEventListener("input", function() {
    console.log("input event fired");
    // Removing leading Zero from the beggining of the string using parseInt()
    if(moneyInput.textContent) {
        moneyInput.textContent = parseInt(moneyInput.textContent);
    } else {
        // User is not allowed to have empty moneyInput, we display '0' instead
        moneyInput.textContent = '0';
    }

    // Changing CSS classes according to moneyInput value
    if (parseInt(moneyInput.textContent) >= minTransaction){
        moneyInputBlock.classList.remove('empty');
        moneyInputBlock.classList.remove('incorrect');
        transactionExplanation.classList.add('hidden');
    }
    if (parseInt(moneyInput.textContent) < minTransaction){
        moneyInputBlock.classList.add("incorrect");
        transactionExplanation.classList.remove('hidden');
    }

    // setting max to input
    if (parseInt(moneyInput.textContent) > maxTransaction)
        moneyInput.textContent = maxTransaction;

    localStorage.setItem('userInput', moneyInput.textContent);
}, false);

// Storing userName and userComment to localStorage every time inputs are modified
userNameInput.addEventListener('input', function() {
    localStorage.setItem('userName', userNameInput.value);
});

userCommentInput.addEventListener('input', function() {
    localStorage.setItem('userComment', userCommentInput.value);
});

// Widget buttons on bottom will be 'Reset' buttons, that will reverse all user data, and set 'Accumulated' to its initial state
const widgetButtons = document.getElementsByClassName('widget-button-icon');
// Resetting user data by clicking any of widget buttons at the bottom
// by getting elements with the same className, we create 'collection' not an 'array'
[widgetButtons[0], widgetButtons[1]].forEach(function(element) {
    element.addEventListener('click', function(){
        localStorage.removeItem('accumulated');
        localStorage.removeItem('userInput');
        localStorage.removeItem('userName');
        localStorage.removeItem('userComment');
        accumulatedDisplay.textContent = formatNumber(initialAccumulated) + currencySymbol;
        jarGlassUpd();
        console.log('All user date successfully deleted!')
    });
});

// INITIALIZATION CODE - running once after loading page
// Display Goal
goalDisplay.textContent = formatNumber(goalValue) + currencySymbol;

// Display Accumulated
accumulatedDisplay.textContent = formatNumber(accumulatedValue) + currencySymbol;

// As we store 'accumulated' value between sessions, I update jar img after page is loaded
jarGlassUpd();

// Loading correct CSS according to displayed numeric values
if(parseInt(moneyInput.textContent) !== 0 && parseInt(moneyInput.textContent) < minTransaction) {
    moneyInputBlock.classList.remove("empty");
    moneyInputBlock.classList.add('incorrect');
    transactionExplanation.classList.remove('hidden');
}
else if (parseInt(moneyInput.textContent) > minTransaction) {
    moneyInputBlock.classList.remove("empty");
    moneyInputBlock.classList.remove('incorrect');
}

