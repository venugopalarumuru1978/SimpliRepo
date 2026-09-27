import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Register()
{
    const {'*' : info } = useParams();
    const [seconds, setSeconds] = useState(0);
    const [paramInfo, setParamInfo] = useState([]);
    
    useEffect(()=>{

        setParamInfo(info.split('/'));

        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
          }, 1000);
      
          // The cleanup function
          return () => clearInterval(intervalId);      
    },[]);

return(
    <>
    <h1>Register Page</h1>
    <h1>{seconds}</h1>
    <h1>{info}</h1>
    {
        paramInfo.map((p)=>(
            <h1>{p}</h1>
        ))
    }
    
    </>
);
}

export default Register;