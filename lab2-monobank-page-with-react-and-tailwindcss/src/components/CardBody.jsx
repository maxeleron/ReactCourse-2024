import InputBlock from './InputBlock';
import UserInputFields from './UserInputFields';
import MonoPayButton from './MonoPayButton';
import GPayButton from './GPayButton';

function CardBody() {
    return <div className='card-component bg-white'>
        <InputBlock />
        <UserInputFields />
        <MonoPayButton />
        <GPayButton />
        Body
    </div>
}

export default CardBody;