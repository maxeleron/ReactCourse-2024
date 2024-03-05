// Set Goal
goalDisplay.textContent = formatNumber(goalValue) + currencySymbol;

// Set Accumulated
accumulatedDisplay.textContent = formatNumber(accumulatedValue) + currencySymbol;

// Works once on the initialisation
if(parseInt(moneyInput.textContent) !== 0 && parseInt(moneyInput.textContent) < minTransaction) {
    moneyInputBlock.classList.remove("empty");
    moneyInputBlock.classList.add('incorrect');
    transactionExplanation.classList.remove('hidden');
}
else if (parseInt(moneyInput.textContent) > minTransaction) {
    moneyInputBlock.classList.remove("empty");
    moneyInputBlock.classList.remove('incorrect');
}

