function ChipButton ({incrementValueUah, incrementValueEur, moneyValue, setMoneyValue, config}) {
    const handleChipBtnClick = () => {
        const newValue = moneyValue + incrementValueUah;
        setMoneyValue(Math.min(newValue, config.maxTransaction))
    }

    return <div tabIndex='0' className='border text-center transition-[background] duration-[0.2s] cursor-pointer select-none min-h-[40px] flex flex-1 flex-col justify-center mx-2 my-0 px-[3px] py-0 rounded-2xl border-solid border-[#ccc] bg-white hover:bg-mono-light-gray' onClick={handleChipBtnClick}>
        <div className='font-medium text-base leading-6'>+{incrementValueUah}&nbsp;₴</div>
        <div className='font-normal text-xs leading-4 text-mono-gray'>+{incrementValueEur}&nbsp;€</div>
    </div>
}

export default ChipButton;
