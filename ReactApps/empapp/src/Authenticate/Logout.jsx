import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout(props)
{
    const navigate = useNavigate();

    useEffect(()=>{
        props.setLoginstatus('gen');
        navigate('/login');
    },[]);

return(
    <>
        <h1>Logout</h1>
    </>
);
}

export default  Logout;