import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Test1()
{
    const [name, setName] = useState('');
    const [fname, setFname] = useState('');
    const navigate = useNavigate();

    const demoLocal = ()=>{
        localStorage.setItem("person_name", name);

        navigate('/tst2');
    }

    const demoSession = ()=>{
        sessionStorage.setItem("father_name", fname);
        navigate('/tst2');
    }
    return(
        <>
            <input type="text"  name="txtTname"  placeholder="ur name" 
            onChange={(e)=>{setName(e.target.value)}} />
            <br />
            <input type="button"  value="Click Me" onClick={demoLocal} />
            <input type="button"  value="Delete"   onClick={()=>{localStorage.clear()}} />
            <hr />
            <input type="text"  name="txtPname"  placeholder="ur father name" 
            onChange={(e)=>{setFname(e.target.value)}} />
            <br />
            <input type="button"  value="Click Me" onClick={demoSession} />
        </>
    );
}