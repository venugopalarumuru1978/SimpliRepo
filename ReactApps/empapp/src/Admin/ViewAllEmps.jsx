import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ViewAllEmps()
{
    const [emp, setEmp] = useState([]);
    const navigate =  useNavigate();
    const [chk,setChk] = useState(0);

    useEffect(()=>{
        axios.get('http://localhost:3000/Employee')
        .then((response)=>{
            console.log(response.data);
            setEmp(response.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[chk]);


    const Search = (eid) =>
    {
        navigate('/s_emp/' + eid);
    }

    const DelEmp = (eid) =>{
        if(confirm("Are u sure to delete")==true)
        {
            axios.delete('http://localhost:3000/Employee/' + eid)
            .then((response)=>{
                console.log(response.data);
                setChk(chk+1);
            })
            .catch((err)=>{
                console.log(err);
            });
        }
    }

    return(
        <>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-header">
                            <b>Employee Information</b>
                        </div>
                        <div className="card-body">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>Emp ID</th>
                                        <th>Emp Name</th>
                                        <th>Emp Job</th>
                                        <th>Emp Salary</th>
                                        <th>Emp Email</th>
                                        <th>Acc Password</th>
                                        <th>Operations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        emp.map((em)=>(
                                            <tr key={em.id}>
                                                <td>{em.id}</td>
                                                <td>{em.ename}</td>
                                                <td>{em.job}</td>
                                                <td>{em.sal}</td>
                                                <td>{em.email}</td>
                                                <td>{em.pswd}</td>
                                                <td>
                                                    <input type="button"  value="View Emp"   className="btn btn-info"  onClick={()=>{Search(em.id)}} />
                                                    &nbsp;&nbsp;&nbsp;
                                                    <input type="button"  value="Delete Emp"   className="btn btn-danger" onClick={()=>{DelEmp(em.id)}} />
                                                    &nbsp;&nbsp;&nbsp;
                                                    <input type="button"  value="Modify Emp"   className="btn btn-warning" onClick={()=>{navigate('/m_emp/' + em.id)}} />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>    
        </>
    );
}

export default ViewAllEmps;