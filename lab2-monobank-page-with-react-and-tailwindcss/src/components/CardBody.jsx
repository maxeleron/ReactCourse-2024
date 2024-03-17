import InputBlock from './InputBlock';
import UserInputFields from './UserInputFields';
import MonoPayButton from './MonoPayButton';

function CardBody() {
    return <div className='card-component bg-white'>
        <InputBlock />
        <UserInputFields />
        <MonoPayButton />
        Body
    </div>
}

export default CardBody;