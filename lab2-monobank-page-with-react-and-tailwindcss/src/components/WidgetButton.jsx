function WidgetButton (props) {
    return <div className="widget-button" tabIndex='0'>
        <div className="flex items-center">
            <img src={props.iconLink} className='w-4 h-4'/>
            <div className="ml-2">{props.name}</div>
        </div>
    </div>
}

export default WidgetButton;