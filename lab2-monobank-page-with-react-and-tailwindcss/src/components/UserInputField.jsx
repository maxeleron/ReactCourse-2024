function UserInputField({id, pH, inputValue, setInputValue}) {
    function handleInput (e) {
        setInputValue(e.target.value);
    }

    return <input id={id}
            placeholder={pH}
            type='text'
            value={inputValue}
            onChange={handleInput}
            className='inputF max-w-xs w-80 border h-14 font-semibold mb-4 mx-auto px-4 py-0 rounded-2xl border-solid border-[#ccc]'/>
}

export default UserInputField;
