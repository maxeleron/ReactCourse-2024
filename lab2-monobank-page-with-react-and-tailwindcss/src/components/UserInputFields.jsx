function UserInputFields() {
    return <>
        <div className="field card-holder">
            <input type="text" id="cardHolder" className="inputF max-w-xs w-80 border h-14 font-semibold mb-4 mx-auto px-4 py-0 rounded-2xl border-solid border-[#ccc]" placeholder="Your name (optional)"/>
        </div>
        <div className="field payment-comment">
            <input type="text" id="comment" className="inputF max-w-xs w-80 border h-14 font-semibold mb-4 mx-auto px-4 py-0 rounded-2xl border-solid border-[#ccc]" placeholder="Comment (optional)"/>
        </div>
    </>
}

export default UserInputFields;