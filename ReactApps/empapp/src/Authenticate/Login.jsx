import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login()
{
    const [uname, setUname] = useState('');
    const [pwd, setPwd] = useState('');
    const [info, setInfo] = useState('');
    const navigate = useNavigate();

    const UserCheck = (e) =>{
        e.preventDefault();
        if(uname==="admin" && pwd==="admin@123")
        {
            navigate('/viewallemp');
        }
        else
        {
            setInfo('Please check username/password');
        }
    }

    return(
        <>
         <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <b>Login</b>
                    </div>
                    <div className="card-body">
                        <form name="frmLogin" method="post" onSubmit={UserCheck}>
                                    <label>Username / Mail ID</label>
                                    <input type="text"  name="txtUname"  placeholder="Username" className="form-control"
                                    onChange={(e)=>{setUname(e.target.value)}} />
                                    <br />
                                    <label>Password</label>
                                    <input type="password"  name="txtPass"  placeholder="Password" className="form-control"
                                    onChange={(e)=>{setPwd(e.target.value)}} />
                            <br /><br />
                            <div className="row">
                                <div className="col-md-12" style={{textAlign:"center"}}>
                                    <input type="submit"  value="Login Here"  className="btn btn-primary" />
                                    &nbsp;&nbsp;&nbsp;
                                    <input type="reset"  value="Reset Form"  className="btn btn-danger" />
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col-md-12" style={{textAlign:"center",color:"red"}}>
                                {info}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
        </>
    );
}

export default Login;