import { useState } from "react";

function DemoState()
{
    const [x, setX] = useState(0); // integer variable
    
    // arrow functions
    const Inc = ()=>{
        setX(x+1);   // x = x+1
    }

    return(
        <>
        <h2>Demo of useState</h2>
        <h2>X value is : {x}</h2>
        <table width="100%">
            <tr>
                <td style={{textAlign:"right"}}>
                <input type="button"  value="Increment" onClick={Inc} />
                </td>
                <td style={{textAlign:"left"}}>
                <input type="button"  value="Decrement" onClick={()=>{setX(x-1)}} />
                </td>
            </tr>
        </table>
        </>
    );
}
export default DemoState;