// Set Goal
goalDisplay.textContent = formatNumber(goalValue) + currencySymbol;

// Set Accumulated
accumulatedDisplay.textContent = formatNumber(accumulatedValue) + currencySymbol;

if(parseInt(moneyInput.textContent) !== 0 && parseInt(moneyInput.textContent) <= minTransaction) {
    moneyInputBlock.classList.remove("empty");
    moneyInputBlock.classList.add('incorrect');
}
else if (parseInt(moneyInput.textContent) > minTransaction) {
    moneyInputBlock.classList.remove("empty");
    moneyInputBlock.classList.remove('incorrect');
}
