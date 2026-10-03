import { Link } from "react-router-dom";

function AdminLinks()
{
    return(
        <>
            <div style={{textAlign:"center"}}>
                <b>
                    <Link  to="/newemp">New Employee</Link>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <Link  to="/viewallemp">All Employees</Link>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <Link  to="/login">Logout</Link>
                </b>
            </div>
        </>
    );
}

export default AdminLinks;