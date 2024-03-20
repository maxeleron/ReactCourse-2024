function Jar() {
    return <div id='jarImg' className='relative text-center'>
        <img className="w-56 h-56 mb-5" src="https://send.monobank.ua/img/jar_bg.png"/>
        <img id='jarGlass' className='absolute h-[203px] w-[155px] left-[35px] top-2.5' src='https://send.monobank.ua/img/jar/uah_33.png'/>
        <div className="absolute left-12 top-12">
            <img src='https://send.monobank.ua/img/jar/grid.png' className='w-10 h-40'/>
            <div id='jarGoal' className="font-extrabold text-[10px] text-mono-jar-label-brown absolute whitespace-nowrap left-4 bottom-[154px]" >250 000</div>
            <div id='jarMiddle' className="font-extrabold text-[10px] text-mono-jar-label-brown absolute whitespace-nowrap left-[5px] bottom-[74px]">125 000</div>
            <div id='jarBottom' className="font-extrabold text-[10px] text-mono-jar-label-brown absolute whitespace-nowrap left-[7px] bottom-2">0</div>
        </div>
        </div> 
}

export default Jar;