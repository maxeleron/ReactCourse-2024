import Jar from './Jar';
import JarDescription from './JarDescription';
import JarStats from './JarStats';

function CardHeader() {
    return <div className='card-component bg-mono-cardheader'>
        <img src="https://send.monobank.ua/img/logo_short.png" className="mb-8" alt="monobank logo"/>

        <Jar />
        <JarDescription />
        <JarStats />
    </div>
}

export default CardHeader;