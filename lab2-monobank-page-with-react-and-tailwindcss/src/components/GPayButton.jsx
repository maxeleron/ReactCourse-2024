function GPayButton() {
    return <div className="flex h-12 w-[340px] justify-center mx-auto my-0 rounded-lg bg-black cursor-pointer mb-4 hover:bg-pay-btn-hover active:bg-pay-btn-active">
        <img src="https://www.gstatic.com/instantbuy/svg/dark_gpay.svg" alt="GPay" className="h-[26px] select-none m-auto" style={{userDrag: 'none'}}/>
    </div>
}

export default GPayButton;