import { useState } from "react";

function DemoInput()
{
    const [name, setName] = useState(''); // string
    const [x, setX] = useState(0);
    const [res, setRes] = useState('');

    const getSqr = () =>{
        let sqr = parseInt(x)*parseInt(x);
        setRes(x  + " Square Value is  " + sqr);
    }

    return(
        <>
        <h2>Textbox and Button</h2>
        <table width="100%">
            <tr>
                <td style={{textAlign:"right"}}>
                <h2>Given Name is : {name}</h2>
                <input type="text"  name="txtPname"  placeholder="Enter ur Name" onChange={(event)=>{setName(event.target.value)}} />        
                </td>
        
                <td style={{textAlign:"left"}}>
                    <input type="text"  name="txtVal"  placeholder="Enter any value" onChange={(e)=>{setX(e.target.value)}} />
                    <input type="button"  value="Click Me" onClick={getSqr} />
                    <h2>{res}</h2>
                </td>
            </tr>
        </table>        
        </>
    );
}

export default DemoInput;