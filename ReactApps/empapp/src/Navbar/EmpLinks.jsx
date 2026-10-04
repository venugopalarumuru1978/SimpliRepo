import { Link } from "react-router-dom";

function EmpLinks()
{
    return(
        <>
            <div style={{textAlign:"center"}}>
                <b>
                    <Link  to="/e_bio">Emp Home</Link>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <Link  to="/cpwd">Change Password</Link>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <Link  to="/logout">Logout</Link>
                </b>
            </div>
        </>
    );
}

export default EmpLinks;