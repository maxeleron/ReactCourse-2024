/* eslint-disable no-unused-vars */
import { useState, useEffect, createContext } from 'react';
import Jar from './components/Jar';
import JarDescription from './components/JarDescription';
import JarStats from './components/JarStats';
import MoneyInput from './components/MoneyInput';
import ChipButton from './components/ChipButton';
import UserInputField from './components/UserInputField';
import PayButton from './components/PayButton';
import ManualCardBlock from './components/ManualCardBlock';
import WidgetButton from './components/WidgetButton';
import './App.css'

function App(){
  const [config] = useState({
    minTransaction: 10,
    maxTransaction: 29999,
    initialAccamulated: 10000,
    goalValue: 250000
  });

  const [moneyInputValue, setMoneyInputValue] = useState(+window.localStorage.getItem('money_input_value') || 0);
  const [accamulatedValue, setAccamulatedValue] = useState(+window.localStorage.getItem('accamulated_value') || config.initialAccamulated);
  const [userName, setUserName] = useState(window.localStorage.getItem('user_name') || '');
  const [userComment, setUserComment] = useState(window.localStorage.getItem('user_comment') || '');

  // Storing useState variables to localStorage, whenever they are changed
  useEffect(()=> window.localStorage.setItem('money_input_value', moneyInputValue), [moneyInputValue]);
  useEffect(()=> window.localStorage.setItem('accamulated_value', accamulatedValue), [accamulatedValue]);
  useEffect(()=> window.localStorage.setItem('user_name', userName), [userName]);
  useEffect(()=> window.localStorage.setItem('user_comment', userComment), [userComment]);

  return <>
    <div id="frame" className='flex min-h-[680px] max-w-[990px] w-full shadow-[0_0_14px_rgba(0,0,0,0.2)] overflow-hidden rounded-3xl'>
      {/* CardHeader */}
      <div className='w-6/12 flex flex-col items-center p-[42px] bg-mono-cardheader'>
        <img src="https://send.monobank.ua/img/logo_short.png" className="mb-8" alt="monobank logo"/>

        <Jar accamulatedValue={accamulatedValue} config={config}/>
        <JarDescription />
        <JarStats accamulatedValue={accamulatedValue} setAccamulatedValue={setAccamulatedValue}/>
      </div>

      {/* CardBody */}
      <div className='w-6/12 flex flex-col items-center p-[42px] bg-white'>
        {/* InputBlock Start*/}
        <div className="inputBlock">
            <div className="gradient-container block relative box-border w-[394px] box-border mb-8 p-6 rounded-3xl border-[solid] border-4 border-transparent border-[double] bg-[linear-gradient(white,white),linear-gradient(92.12deg,#57b5f9_0%,#da11ba_100%)]"
                  style={{backgroundClip: 'padding-box, border-box', backgroundOrigin: 'padding-box, border-box'}}>
                <div className="text-center not-italic font-semibold text-sm leading-4 mt-0">Top up amount 💸</div>
                <div id="moneyInputContainer">
                <MoneyInput id='moneyInputContenteditable' moneyValue={moneyInputValue} setMoneyValue={setMoneyInputValue} config={config}/>
                </div>
            <div className="font-normal text-xs leading-4 text-center text-mono-gray -mt-5 mb-4">2% processing fee for non-Ukrainian cards</div>
            <div id='choiceRow' className="flex max-w-[346px] w-full mt-0 m-auto">
                <ChipButton incrementValueUah={100} incrementValueEur={2.38} moneyValue={moneyInputValue} setMoneyValue={setMoneyInputValue} config={config} className='ml-0'/>
                <ChipButton incrementValueUah={500} incrementValueEur={11.92} moneyValue={moneyInputValue} setMoneyValue={setMoneyInputValue} config={config}/>
                <ChipButton incrementValueUah={1000} incrementValueEur={23.84} moneyValue={moneyInputValue} setMoneyValue={setMoneyInputValue} config={config} className='mr-0'/>
            </div>
        </div>
        </div>
        {/* InputBlock End*/}
        <UserInputField id={'cardHolder'} pH={'Your name (optional)'} inputValue={userName} setInputValue={setUserName}/>
        <UserInputField id={'comment'} pH={'Comment (optional)'} inputValue={userComment} setInputValue={setUserComment}/>
        <PayButton id='monoPay' alt={'Mono Pay'} iconLink={'https://send.monobank.ua/img/mono_pay.svg'} moneyValue={moneyInputValue} setMoneyValue={setMoneyInputValue} config={config}
          userName={userName} setUserName={setUserName} userComment={userComment} setUserComment={setUserComment}
          accamulatedValue={accamulatedValue} setAccamulatedValue={setAccamulatedValue}/>
        <PayButton id='gPay' alt={'GPay'} iconLink={'https://www.gstatic.com/instantbuy/svg/dark_gpay.svg'} moneyValue={moneyInputValue} setMoneyValue={setMoneyInputValue} config={config}
          userName={userName} setUserName={setUserName} userComment={userComment} setUserComment={setUserComment}
          accamulatedValue={accamulatedValue} setAccamulatedValue={setAccamulatedValue}/>
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
        <div className='flex gap-2.5'>
            <WidgetButton name={'Run a raffle'} iconLink={'https://send.monobank.ua/img/cup.svg'} setAccamulatedValue={setAccamulatedValue}/>
            <WidgetButton name={'Streaming widget'} iconLink={'https://send.monobank.ua/img/gamepad.svg'} setAccamulatedValue={setAccamulatedValue}/>
        </div>
    </div>
  </>
}
export const MoneyContext = createContext('0');

export default App
