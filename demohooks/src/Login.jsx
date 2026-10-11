import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Welcome from "./Hooks/Welcome";
export const user_emp_name = createContext();
export default function Login()
{
    const navigate = useNavigate();
    const [uname, setUname] = useState('');
    const [pwd, setPwd] = useState('');
    const [info, setInfo] = useState(false);
    const [val, setVal] = useState('Ramana');

    let userinfo = [
        {"uname":"Satyam", "pwd":"12345"},
        {"uname":"Priya", "pwd":"12345"},
        {"uname":"Vennela", "pwd":"12345"}
    ]

    const LoginInfo = () =>{
        let flag = false;
        userinfo.map((u)=>{
            if(u.uname===uname && u.pwd===pwd)
            {
                setVal(u.uname);
                console.log(val);
                flag = true;
                setInfo(true);
                navigate('/welcome');
            }            
        });

        if(flag==false)
            alert("User Not Found");
    }

    return(
        <>
        {
            (info)?
                <user_emp_name.Provider value={val}>
                    <Welcome />
                </user_emp_name.Provider>
                :
                <p></p>
        }
        
        <form> 
            <div style={{textAlign:"center"}}>
                <input type="text"  name="txtuser" placeholder="Username"
                onChange={(e)=>{setUname(e.target.value)}} />
                <br /><br />
                <input type="text"  name="txtpass" placeholder="Password"
                onChange={(e)=>{setPwd(e.target.value)}} />
                <br /><br />
                <input type="submit"  value="Login here" onClick={LoginInfo} />
            </div>
        </form>
        </>
    );
}