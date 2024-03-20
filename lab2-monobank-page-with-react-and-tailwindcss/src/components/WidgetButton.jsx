function WidgetButton (props) {
    return <div className='relative h-10 text-white font-semibold text-sm leading-6 flex items-center justify-center box-border transition-[background] duration-[0.2s] ease-[ease-in-out] select-none cursor-pointer mt-2 px-4 py-0 rounded-2xl border-[0.5px] border-solid border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.2)]' tabIndex='0'>
        <div className='flex items-center'>
            <img src={props.iconLink} className='w-4 h-4'/>
            <div className='ml-2'>{props.name}</div>
        </div>
    </div>
}

export default WidgetButton;
