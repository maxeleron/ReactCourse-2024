/* eslint-disable no-unused-vars */
import { useState, createContext } from 'react';
import Jar from './components/Jar';
import JarDescription from './components/JarDescription';
import JarStats from './components/JarStats';
import MoneyInput from './components/MoneyInput';
import ChipButton from './components/ChipButton';
import UserInputFields from './components/UserInputFields';
import PayButton from './components/PayButton';
import ManualCardBlock from './components/ManualCardBlock';
import WidgetButton from './components/WidgetButton';
import './App.css'

function App(){
  const [moneyInputValue, setMoneyInputValue] = useState(0);

  return <>
    <div id="frame" className='flex min-h-[680px] max-w-[990px] w-full shadow-[0_0_14px_rgba(0,0,0,0.2)] overflow-hidden rounded-3xl'>
      {/* CardHeader */}
      <div className='card-component bg-mono-cardheader'>
        <img src="https://send.monobank.ua/img/logo_short.png" className="mb-8" alt="monobank logo"/>

        <Jar />
        <JarDescription />
        <JarStats />
      </div>

      {/* CardBody */}
      <div className='card-component bg-white'>
        {/* InputBlock Start*/}
        <div className="inputBlock">
            <div className="gradient-container">
                <div className="text-center not-italic font-semibold text-sm leading-4 mt-0">Top up amount 💸</div>
                <div id="moneyInputContainer">
                <MoneyInput id='moneyInputContenteditable' moneyValue={moneyInputValue} setMoneyValue={setMoneyInputValue}/>
                </div>
            <div className="fee-warning">2% processing fee for non-Ukrainian cards</div>
            <div id='choiceRow' className="flex max-w-[346px] w-full mt-0 m-auto">
                <ChipButton incrementValueUah={100} incrementValueEur={2.38} moneyValue={moneyInputValue} setMoneyValue={setMoneyInputValue} className='ml-0'/>
                <ChipButton incrementValueUah={500} incrementValueEur={11.92} moneyValue={moneyInputValue} setMoneyValue={setMoneyInputValue}/>
                <ChipButton incrementValueUah={1000} incrementValueEur={23.84} moneyValue={moneyInputValue} setMoneyValue={setMoneyInputValue} className='mr-0'/>
            </div>
        </div>
        </div>
        {/* InputBlock End*/}
        <UserInputFields />
        <PayButton id='monoPay' alt={'Mono Pay'} iconLink={'https://send.monobank.ua/img/mono_pay.svg'}/>
        <PayButton id='gPay' alt={'GPay'} iconLink={'https://www.gstatic.com/instantbuy/svg/dark_gpay.svg'}/>

        <ManualCardBlock />
      </div>
    </div>
    
    {/* FooterHolder */}
    <div className='flex w-[990px] justify-between items-center text-white pt-5'>
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
  </>
}
export const MoneyContext = createContext('0');

export default App
