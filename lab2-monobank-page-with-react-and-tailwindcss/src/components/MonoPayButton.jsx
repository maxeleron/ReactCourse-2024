function MonoPayButton() {
    return <div className="flex h-12 w-[340px] justify-center mx-auto my-0 rounded-lg bg-black cursor-pointer mb-4 hover:bg-mono-pay-btn-hover active:bg-mono-pay-btn-active">
        <img src="https://send.monobank.ua/img/mono_pay.svg" alt="mono Pay" className="h-[26px] select-none m-auto" style={{userDrag: 'none'}}/>
    </div>
}

export default MonoPayButton;