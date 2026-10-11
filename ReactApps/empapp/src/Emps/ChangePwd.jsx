import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ChangePwd()
{
    const navigate = useNavigate();
    useEffect(()=>{
        if(sessionStorage.getItem("user_emp_chk")==null)
        {
            alert('Please login first');
            navigate('/login');
        }
    },[]);

    return(
        <>
            <h1 style={{textAlign:"center"}}>Change Password</h1>
        </>
    );
}

export default ChangePwd;