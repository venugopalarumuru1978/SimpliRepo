import { useState } from "react";

export default function Test1()
{
    const [info, setInfo] = useState('');
    const [name, setName] = useState('');

    return(
        <>
        <input type="text"  name="txtName" 
            placeholder="Enter ur name" value={info}
            onChange={(e)=>{setInfo(e.target.value)}} />
            <br />
        <input type="button"  value="Click Me" onClick={()=>{setName("SimpliLearn")}} />
            <br />
            <h2>{name}</h2>
        </>
    );
}