import CardHeader from './CardHeader';
import CardBody from './CardBody';

function Frame() {
    return <div className='flex min-h-[680px] max-w-[990px] w-full shadow-[0_0_14px_rgba(0,0,0,0.2)] overflow-hidden rounded-3xl'>
        <CardHeader></CardHeader>
        <CardBody></CardBody>
    </div>


    //         <div className="tap-to-pay">
    //             <div className="gpay-button-fill">
    //                 <button type="button" className="gpay-button black plain short en"></button>
    //             </div>
    //         </div>
    //         <div id="manual-pan-trigger" className="shown">
    //             <div className="splitter"></div>
    //             <div id="card-input-button" tabIndex="0">
    //                 <img src="https://send.monobank.ua/img/card.svg" alt="Credit Card" className="card-icon"/>
    //                 <div className="card-input-label" id="x-manual-pan">Enter card details</div>
    //             </div>
    //         </div>
    //         <div id="manual-pan" className="hidden">###</div>

    //     </div>
    // </div>

    // </>
}

export default Frame;
