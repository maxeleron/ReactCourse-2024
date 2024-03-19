function ManualCardBlock() {
    return <>
        <div id="manual-pan-trigger" className="shown">
            <div className="splitter"></div>
            <div id="card-input-button" tabIndex="0">
                <img src="https://send.monobank.ua/img/card.svg" alt="Credit Card" className="card-icon"/>
                <div className="card-input-label" id="x-manual-pan">Enter card details</div>
            </div>
        </div>
    </>
}

export default ManualCardBlock;