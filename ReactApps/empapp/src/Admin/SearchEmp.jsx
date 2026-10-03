import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function SearchEmp()
{
    const {eid} = useParams();
    // json empty object
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{emp.id}</td>
                                        <td>{emp.ename}</td>
                                        <td>{emp.job}</td>
                                        <td>{emp.sal}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.pswd}</td>
                                    </tr>                                    
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

export default SearchEmp;