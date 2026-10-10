import { useEffect, useState } from "react";

export default function Test2()
{
    const [name, setName] = useState();
    const [fname, setFname] = useState();

    useEffect(()=>{
        setName(localStorage.getItem('person_name'));
        setFname(sessionStorage.getItem('father_name'));
    },[]);

    return(
        <>
            <h1>Test 2 Component</h1>
            <h2>Given name is : {name}</h2>
            <h2>Father Name : {fname}</h2>
        </>
    );
}