import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddEmp()
{
    const [formErrors, setFormErrors] = useState({});    
    const navigate = useNavigate();
    // json useState obj
    const [emp, setEmp] = useState({
        "id":0,
        "ename":"",
        "job":"",
        "sal":0.0,
        "email":"",
        "pswd":""
    });
    
    const Validate = () =>{
        const errors = {}; // empty local json object
        let flag = true;
        if(emp.ename==='')
        {
            errors.enameErr = "Emp Name is Required!";
            flag = false;
        }

        if(emp.job==='')
        {
            errors.jobErr = "Emp Job is Required!";
            flag = false;
        }

        if(emp.sal===0)
        {
            errors.salErr = "Emp Salary is Required!";
            flag = false;
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emp.email==='')
        {
            errors.emailErr = "Emp Email is Required!";
            flag = false;
        }        
        else if(emailRegex.test(emp.email)===false)
        {
            errors.emailErr = "Invalid Email ID";
            flag = false;
        }
        if(emp.pswd==='')
        {
            errors.pswdErr = "Password is Required!";
            flag = false;
        }

        let pwdlen = emp.pswd.length;
        if(!(pwdlen>=4 && pwdlen<=10))
        {
            errors.pswdErr = "Password length must be between 4 to 10 letters";
            flag = false;
        }

        setFormErrors(errors);
        return flag;

    }


    const NewEmployee = (e)=>{
        e.preventDefault();
        //console.log(emp);
        if(Validate()===true)
        {
            axios.post('http://localhost:3000/Employee',emp)
            .then((response)=>{
                console.log(response.data);
                //console.log('Employee Added');
                //alert('employee added...');
                navigate('/viewallemp');
            })
            .catch((err)=>{
                console.log('Error Info');
            });
        }
    }


 
    return(
        <>
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        <b>Employee Register</b>
                    </div>
                    <div className="card-body">
                        <form name="frmReg" method="post"  onSubmit={NewEmployee}>
                            <div className="row">
                                <div className="col-md-4">                                
                                    <input type="text"  name="txtEname"  placeholder="Emp Name" className="form-control"
                                    onChange={(e)=>{setEmp({...emp,ename:e.target.value})}} />
                                    <p style={{color:"red"}}>{formErrors.enameErr}</p>
                                </div>
                                <div className="col-md-4">
                                    
                                    <input type="text"  name="txtJob"  placeholder="Emp Job" className="form-control" 
                                    onChange={(e)=>{setEmp({...emp,job:e.target.value})}} />
                                    <p style={{color:"red"}}>{formErrors.jobErr}</p>
                                </div>
                                <div className="col-md-4">
                                    
                                    <input type="text"  name="txtSal"  placeholder="Emp Salary" className="form-control" 
                                    onChange={(e)=>{setEmp({...emp,sal:e.target.value})}} />
                                    <p style={{color:"red"}}>{formErrors.salErr}</p>
                                </div>
                            </div>

                            <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="email"  name="txtEmail"  placeholder="Emp Email" className="form-control"
                                    onChange={(e)=>{setEmp({...emp,email:e.target.value})}} />
                                    <p style={{color:"red"}}>{formErrors.emailErr}</p>
                                </div>
                                <div className="col-md-6">
                                    <input type="text"  name="txtPwd"  placeholder="Account Password" className="form-control" 
                                    onChange={(e)=>{setEmp({...emp,pswd:e.target.value})}} />
                                    <p style={{color:"red"}}>{formErrors.pswdErr}</p>
                                </div>
                            </div>

                            <br />
                            <div className="row">
                                <div className="col-md-12" style={{textAlign:"center"}}>
                                    <input type="submit"  value="Add New Employee"  className="btn btn-primary" />
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

export default AddEmp;