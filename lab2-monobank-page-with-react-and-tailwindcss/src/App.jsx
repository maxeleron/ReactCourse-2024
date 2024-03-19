// import { useState } from 'react'
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import FooterHolder from './components/FooterHolder';
import './App.css'

function App(){
  return <>
    <div id="frame" className='flex min-h-[680px] max-w-[990px] w-full shadow-[0_0_14px_rgba(0,0,0,0.2)] overflow-hidden rounded-3xl'>
      <CardHeader></CardHeader>
      <CardBody></CardBody>
    </div>
    <FooterHolder></FooterHolder>
  </>
}

export default App
