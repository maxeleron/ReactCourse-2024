function JarStats({accamulatedValue}) {
    return <div className='flex mt-4 rounded-2xl bg-white'>
            <div className='flex gap-3 mx-0 my-3 px-5 py-0 border-r-[solid] border-r-[0.5px]'><img src='https://send.monobank.ua/img/collected.svg' className='stats-data__icon'/>
              <div>
                  <div className='font-normal text-sm leading-4 text-mono-gray'>Accumulated</div>
                  <div className='font-medium text-base leading-6 text-black'>{accamulatedValue}&nbsp;₴</div>
              </div>
            </div>
            <div className='flex gap-3 mx-0 my-3 px-5 py-0'><img src='https://send.monobank.ua/img/target.svg' className='stats-data__icon'/>
              <div>
                  <div className='font-normal text-sm leading-4 text-mono-gray'>Goal</div>
                  <div className='font-medium text-base leading-6 text-black'>250000&nbsp;₴</div>
              </div>
        </div>
    </div>
}

export default JarStats;