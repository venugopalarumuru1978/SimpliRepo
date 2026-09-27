import { Link, useParams } from "react-router-dom";

function Welcome()
{
    const {uname} = useParams();
    return(
        <>
            <h1>Welcome to {uname} &nbsp;&nbsp;| &nbsp;&nbsp;
                <Link to="/login">Logout</Link>
            </h1>
            <hr />
        </>
    );
}

export default Welcome;