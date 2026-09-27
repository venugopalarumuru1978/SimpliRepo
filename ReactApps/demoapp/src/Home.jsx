import { useState } from "react";
import { useEffect } from "react";

function Home()
{
    const [str, setStr] = useState('');

    useEffect(()=>{
        setStr('This is use Effect hook');
    });



    return(
        <>
            <h1>Home Component</h1>
            <h1>{str}</h1>
        </>
    );
}

export default Home;