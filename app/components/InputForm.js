export default function InputForm({pHold, btnText}) {
    return(
        <span className="flex inline-block w-full p-[2px] border-2 rounded-lg">
            <input type="text" className="w-full bg-transparent text-white
            p-4 text-[24px]" placeholder={pHold}/>
            <button
                className="text-[22px] text-black bg-white uppercase p-4 rounded-lg
                hover:bg-transparent hover:text-white transition-all">
                {btnText}</button>
        </span>
    )
}