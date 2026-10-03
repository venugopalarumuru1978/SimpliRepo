import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function ModEmp()
{
    const {eid} = useParams();
    const navigate = useNavigate();
    const [emp, setEmp] = useState({});
    
    useEffect(()=>{
        axios.get('http://localhost:3000/Employee/'+ eid)
        .then((response)=>{
            console.log(response.data);
            setEmp(response.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    const UpdateEmp = (e)=>{
        e.preventDefault();

        axios.put('http://localhost:3000/Employee/' + eid, emp)
        .then((response)=>{
            console.log(response.data);
            navigate('/viewallemp');
        })
        .catch((err)=>{
            console.log(err);
        });

    }

    return(
        <>
         <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        <b>Employee Modification</b>
                    </div>
                    <div className="card-body">
                        <form name="frmReg" method="post" onSubmit={UpdateEmp}>
                            <div className="row">
                                <div className="col-md-4">                                
                                    <input type="text"  name="txtEname"  className="form-control" value={emp.ename}
                                        onChange={(e)=>{setEmp({...emp,ename:e.target.value})}} />
                                </div>
                                <div className="col-md-4">
                                    
                                    <input type="text"  name="txtJob"  value={emp.job} className="form-control" 
                                        onChange={(e)=>{setEmp({...emp,job:e.target.value})}} />
                                </div>
                                <div className="col-md-4">
                                    
                                    <input type="text"  name="txtSal"  value={emp.sal} className="form-control" 
                                        onChange={(e)=>{setEmp({...emp,sal:e.target.value})}} />
                                </div>
                            </div>

                            <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="email"  name="txtEmail"  value={emp.email} className="form-control"
                                    onChange={(e)=>{setEmp({...emp,email:e.target.value})}} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text"  name="txtPwd"  value={emp.pswd} className="form-control" 
                                    onChange={(e)=>{setEmp({...emp,pswd:e.target.value})}} />
                                </div>
                            </div>

                            <br />
                            <div className="row">
                                <div className="col-md-12" style={{textAlign:"center"}}>
                                    <input type="submit"  value="Modify Employee"  className="btn btn-primary" />
                                    &nbsp;&nbsp;&nbsp;
                                    <input type="reset"  value="Reset Form"  className="btn btn-danger" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
        </>
    );
}

export default ModEmp;