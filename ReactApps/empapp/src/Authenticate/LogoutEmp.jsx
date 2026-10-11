import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogoutEmp(props)
{
    const navigate = useNavigate();

    useEffect(()=>{
        //localStorage.removeItem("user_emp_chk");
        sessionStorage.removeItem("user_emp_chk");
        props.setLoginstatus('gen');
        navigate('/login');
    },[]);

return(
    <>
        <h1>Logout</h1>
    </>
);
}

export default  LogoutEmp;