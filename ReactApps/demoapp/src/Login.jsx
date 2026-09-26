import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login()
{
    const navigate = useNavigate();
    const  [user, setUser] = useState('');
    const  [pwd, setPwd] = useState('');
    const  [info, setInfo] = useState('');
    
    const userCheck = () =>{
        if(user==="Venugopal"  &&  pwd==="v@123")
            navigate('/welcome');
        else
            setInfo('User Details are in-correct');
    }

    return(
        <>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">

                        <div className="row">
                            <div className="col-md-6">
                            <b>Login here</b>
                            </div>
                            <div className="col-md-6" style={{textAlign:"right"}}>
                                <Link  to="/reg">Register</Link>
                            </div>
                        </div>


                        
                    </div>
                    <div className="card-body">
                        <label>User name</label>
                        <input type="text"  name="txtUser"  
                        className="form-control" 
                        placeholder="User name" 
                        onChange={(e)=>{setUser(e.target.value)}} />
                        <br />
                        <label>Password</label>
                        <input type="password"  name="txtPass" 
                         className="form-control" 
                         placeholder="User name" 
                         onChange={(e)=>{setPwd(e.target.value)}} />

                        <div style={{textAlign:"center"}}>
                            <input type="button"  value="Login here"  className="btn btn-success" onClick={userCheck} />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="button"  value="Reset"  className="btn btn-danger" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3"></div>
            <h3 style={{textAlign:"center"}}>{info}</h3>
        </div>
        
        </>
    );
}

export default Login;