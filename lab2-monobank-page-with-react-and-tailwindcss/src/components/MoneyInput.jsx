function MoneyInput ({moneyValue, setMoneyValue, config}) {

    function handleInput (e) {
        // allowing to type only the numbers
        const newValue = (parseInt(e.target.value.replace(/\D/g, '')) || 0);

        // checking maxTransaction
        setMoneyValue(Math.min(newValue, config.maxTransaction));
    }

    return <>
        <div id='moneyInputBlock' className={(moneyValue>config.minTransaction) ? '' : (moneyValue===0) ? 'empty': 'incorrect'}>
                <input className='text-5xl font-bold pr-px outline-none block w-40 text-center'
                onChange={handleInput}
                max={config.maxTransaction}
                value={moneyValue}
                />

                <div className='whitespace-pre-wrap flex items-end'> ₴</div> 
        </div>
        <div style={{visibility: (config.minTransaction>moneyValue>0) ? 'visible': 'hidden'}}
        className="font-normal text-xs leading-none text-center text-mono-gray -mt-6 mb-5 mx-4 block">
            Minimum amount: {config.minTransaction} ₴. Maximum amount: {config.maxTransaction} ₴
        </div>
    </>

}

export default MoneyInput;
