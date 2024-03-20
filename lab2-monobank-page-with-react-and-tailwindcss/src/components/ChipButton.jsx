function ChipButton ({incrementValueUah, incrementValueEur, moneyValue, setMoneyValue}) {
    const handleChipBtnClick = () => {
        setMoneyValue(moneyValue + incrementValueUah)
    }

    return <div tabIndex="0" className="chip-button" onClick={handleChipBtnClick}>
        <div className="font-medium text-base leading-6">+{incrementValueUah}&nbsp;₴</div>
        <div className="font-normal text-xs leading-4 text-mono-gray">+{incrementValueEur}&nbsp;€</div>
    </div>
}

export default ChipButton;
