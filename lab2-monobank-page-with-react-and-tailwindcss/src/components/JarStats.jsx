function JarStats() {
    return <div className='flex mt-4 rounded-2xl bg-white'>
            <div className='stats-data border-r-[solid] border-r-[0.5px]'><img src='https://send.monobank.ua/img/collected.svg' className='stats-data__icon'/>
              <div>
                  <div className='stats-data__label'>Accumulated</div>
                  <div className='stats-data__value'>7700</div>
              </div>
            </div>
            <div className='stats-data'><img src='https://send.monobank.ua/img/target.svg' className='stats-data__icon'/>
              <div>
                  <div className='stats-data__label'>Goal</div>
                  <div className='stats-data__value'>250000</div>
              </div>
        </div>
    </div>
}

export default JarStats;