function ManualCardBlock() {
    return <>
        <div className='flex flex-col w-full box-border max-w-[340px] mb-[42px] mx-6'>
            {/* Splitter */}
            <div className='w-full mt-6 mb-2 border-t-[0.5px] border-t-[#ccc] border-solid'></div>
            {/* Manual card label */}
            <div id='card-input-button' className='' tabIndex='0'>
                <img src='https://send.monobank.ua/img/card.svg' alt='Credit Card' className='w-4 h-6 mr-2'/>
                <div id='cardInputLabel'>Enter card details</div>
            </div>
        </div>
    </>
}

export default ManualCardBlock;