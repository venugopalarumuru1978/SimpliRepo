import { Link } from "react-router-dom";

function Welcome()
{

    return(
        <>
            <h1>Welcome to Admin &nbsp;&nbsp;| &nbsp;&nbsp;
                <Link to="/login">Logout</Link>
            </h1>
            <hr />
        </>
    );
}

export default Welcome;