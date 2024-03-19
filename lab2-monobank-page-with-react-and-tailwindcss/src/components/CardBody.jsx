import InputBlock from './InputBlock';
import UserInputFields from './UserInputFields';
import MonoPayButton from './MonoPayButton';
import GPayButton from './GPayButton';
import ManualCardBlock from './ManualCardBlock';

function CardBody() {
    return <div className='card-component bg-white'>
        <InputBlock />
        <UserInputFields />
        <MonoPayButton />
        <GPayButton />
        <ManualCardBlock />
    </div>
}

export default CardBody;