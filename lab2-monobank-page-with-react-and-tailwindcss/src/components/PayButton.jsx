function PayButton ({iconLink, alt, moneyValue, setMoneyValue, accamulatedValue, setAccamulatedValue, config,
    userName, setUserName, userComment, setUserComment}) {
    const handlePayBtnClick = () => {
        if (moneyValue <= config.minTransaction) return;

        const newAccamulated = accamulatedValue + moneyValue;
        console.log(`Transaction [${new Date().toLocaleTimeString()}]
User: ${userName || 'Anonymous'}; Comment: ${userComment || '(silent)'};
Payment: ${moneyValue};

Now accumulated: ${newAccamulated}`);

        setAccamulatedValue(accamulatedValue + moneyValue);
        setMoneyValue(0);
        setUserName('');
        setUserComment('');
    }

    return <div className='flex h-12 w-[340px] justify-center mx-auto my-0 rounded-lg bg-black cursor-pointer mb-4 hover:bg-pay-btn-hover active:bg-pay-btn-active'
            onClick={handlePayBtnClick}>
        <img src={iconLink} alt={alt} className='h-[26px] select-none m-auto' style={{userDrag: 'none'}}/>
    </div>
}

export default PayButton;
