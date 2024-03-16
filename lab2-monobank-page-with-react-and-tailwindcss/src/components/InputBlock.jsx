function InputBlock() {
    return <div className="inputBlock">
            <div className="gradient-container">
                <div className="text-center not-italic font-semibold text-sm leading-4 mt-0">Top up amount 💸</div>
                <div id="moneyInputContainer">
                <div className="money-input-block px-0 py-5 empty">
                    <div id='moneyInputContenteditable' className="text-5xl font-bold pr-px outline-none" contentEditable="true" inputMode="decimal">0</div>
                    <div className="whitespace-pre-wrap flex items-end"> ₴</div>
                </div>
                <div className="money-input-subtitle hidden">Minimum amount: 10 ₴. Maximum amount: 29 999 ₴</div>

            <div className="fee-warning">2% processing fee for non-Ukrainian cards</div>
            <div id='choiceRow' className="flex max-w-[346px] w-full mt-0 m-auto">
                <div tabIndex="0" className="chip-button ml-0">
                    <div className="font-medium text-base leading-6">+100&nbsp;₴</div>
                    <div className="font-normal text-xs leading-4 text-mono-gray">+2.38&nbsp;€</div>
                </div>
                <div tabIndex="0" className="chip-button">
                    <div className="font-medium text-base leading-6">+500&nbsp;₴</div>
                    <div className="font-normal text-xs leading-4 text-mono-gray">+11.92&nbsp;€</div>
                </div>
                <div tabIndex="0" className="chip-button mr-0">
                    <div className="font-medium text-base leading-6">+1&nbsp;000&nbsp;₴</div>
                    <div className="font-normal text-xs leading-4 text-mono-gray">+23.84&nbsp;€</div>
                </div>
            </div>
    </div>
    </div>
    </div>
}

export default InputBlock;