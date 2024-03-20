function ManualCardBlock() {
    return <>
        <div className='flex flex-col w-full box-border max-w-[340px] mb-[42px] mx-6'>
            {/* Splitter */}
            <div className='w-full mt-6 mb-2 border-t-[0.5px] border-t-[#ccc] border-solid'></div>
            {/* Manual card label */}
            <div className='flex font-semibold text-sm leading-6 text-center cursor-pointer text-[#e85e5b] items-center justify-center w-full box-border transition-[background] duration-[0.2s] p-2 rounded-lg bg-transparent' tabIndex='0'>
                <img src='https://send.monobank.ua/img/card.svg' alt='Credit Card' className='w-4 h-6 mr-2'/>
                <div id='cardInputLabel'>Enter card details</div>
            </div>
        </div>
    </>
}

export default ManualCardBlock;