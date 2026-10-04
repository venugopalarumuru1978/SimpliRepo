import { useEffect, useRef, useState } from "react";

function RefEx1()
{
    const inputRef = useRef(null);
    const [info, setInfo] = useState('');    
    
    useEffect(()=>{
        inputRef.current.focus();
    });

    const btnClick = ()=>{
        let str = inputRef.current.value;
        setInfo(str);
    }
    
    return(
        <>
            <input ref={inputRef} type="text" />
            <button onClick={btnClick}>Focus the input</button>
            <br />
            <h1>{info}</h1>
        </>
    );
}

export default RefEx1;