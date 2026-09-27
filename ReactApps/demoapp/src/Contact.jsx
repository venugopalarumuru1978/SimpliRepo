import { useEffect, useState } from "react";

function Contact()
{
    const [seconds, setSeconds] = useState(0);
    const [x, setX] = useState(0);
    useEffect(()=>{
        setSeconds(x+1);
          // The cleanup function
    },[x]);

    return(
        <>
        <h1>Contact Component</h1>
        <h2>Seconds Info : {seconds}</h2>
        <input type="button"  value="Click Me"  onClick={()=>{setX(x+1)}} />
        </>
        
    );
}

export default Contact;