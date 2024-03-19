import InputBlock from './InputBlock';
import UserInputFields from './UserInputFields';
import PayButton from './PayButton';
import ManualCardBlock from './ManualCardBlock';

function CardBody() {
    return <div className='card-component bg-white'>
        <InputBlock />
        <UserInputFields />
        <PayButton id='monoPay' alt={'Mono Pay'} iconLink={'https://send.monobank.ua/img/mono_pay.svg'}/>
        <PayButton id='gPay' alt={'GPay'} iconLink={'https://www.gstatic.com/instantbuy/svg/dark_gpay.svg'}/>

        <ManualCardBlock />
    </div>
}

export default CardBody;