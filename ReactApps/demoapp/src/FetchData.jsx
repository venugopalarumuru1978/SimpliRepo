import { useEffect, useState } from "react";
import axios from "axios";
function FetchData()
{
    const [empdata, setEmpData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/Employee')
        .then((response)=>{
            //console.log(response.data);
            setEmpData(response.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])

    return(
        <>
        <h1 style={{textAlign:"center"}}>Employee Information</h1>
        <hr />
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>Emp ID</th>
                    <th>Emp Name</th>
                    <th>Emp Job</th>
                    <th>Emp Salary</th>
                </tr>                
            </thead>
            <tbody>
                {
                    empdata.map((emp)=>(
                        <tr>
                            <td>{emp.id}</td>
                            <td>{emp.ename}</td>
                            <td>{emp.job}</td>
                            <td>{emp.sal}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    );
}

export default FetchData;