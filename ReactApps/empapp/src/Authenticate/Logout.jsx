import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout(props)
{
    const navigate = useNavigate();

    useEffect(()=>{
        //localStorage.removeItem("user_admin_chk");
        sessionStorage.removeItem("user_admin_chk");
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