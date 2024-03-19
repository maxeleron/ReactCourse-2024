function PayButton (props) {
    return <div className='flex h-12 w-[340px] justify-center mx-auto my-0 rounded-lg bg-black cursor-pointer mb-4 hover:bg-pay-btn-hover active:bg-pay-btn-active'>
        <img src={props.iconLink} alt={props.alt} className='h-[26px] select-none m-auto' style={{userDrag: 'none'}}/>
    </div>
}

export default PayButton;