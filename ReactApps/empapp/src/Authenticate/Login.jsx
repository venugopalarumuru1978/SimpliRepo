import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login(props)
{
    const uname = useRef(null);
    const pwd = useRef(null);

    const [info, setInfo] = useState('');
    const navigate = useNavigate();
    const [emp, setEmp] = useState([]);
    const [chk, setChk] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:3000/Employee')
        .then((response)=>{
            console.log(response.data);
            setEmp(response.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);


    const UserCheck = (e) =>{
        e.preventDefault();
        if(uname.current.value === "admin" && pwd.current.value === "admin@123")
        {
            props.setLoginstatus('admin')
            navigate('/viewallemp');
        }
        else
        {
            emp.map((em)=>{
                if(em.email === uname.current.value && em.pswd === pwd.current.value)
                {
                    props.setLoginstatus('emp')
                    setChk(true);
                    navigate('/e_bio/' + em.id);
                }
            });
            if(chk===false)
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
                                    <input type="text"  name="txtUname"  
                                    placeholder="Username" className="form-control"
                                    ref={uname}  required />
                                    <br />
                                    <label>Password</label>
                                    <input type="password"  name="txtPass"  
                                    placeholder="Password" className="form-control"
                                    ref={pwd} required />
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