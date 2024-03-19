import WidgetButton from './WidgetButton';

function FooterHolder() {
    return <div className='flex w-[990px] justify-between items-center text-white pt-5'>
                <div className='font-medium text-xs leading-4 opacity-80'>
                    JSC &quot;UNIVERSAL BANK&quot; License of the NBU №92 dated January 20, 1994, 
                    <br/>
                    Number in the State Register of Banks № 226
                </div>
                <div className='flex'>
                    <WidgetButton name={'Run a raffle'} iconLink={'https://send.monobank.ua/img/cup.svg'}/>
                    <WidgetButton name={'Streaming widget'} iconLink={'https://send.monobank.ua/img/gamepad.svg'}/>
                </div>
    </div>
}

export default FooterHolder;