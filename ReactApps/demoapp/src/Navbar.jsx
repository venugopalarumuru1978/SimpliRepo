import './Child1.css'
import { Link} from 'react-router-dom'
function Navbar()
{
    return(
        <>
        <div className='textalign'>
        <h1 style={{textAlign:"center"}}>Props Demo</h1>
            <hr />
        <Link to="/home">Home</Link>
        &nbsp;&nbsp;
        <Link to="/contact">Contact</Link>
        &nbsp;&nbsp;
        <Link to="/login">Login</Link>
        &nbsp;&nbsp;
        <Link to="/ch1">Child - 1</Link>
        &nbsp;&nbsp;
        <Link to="/ch2">Child - 2</Link>
        &nbsp;&nbsp;
        <Link to="/ch3">Child - 3</Link>
        &nbsp;&nbsp;
        <Link to="/ch4">Child - 4</Link>
        </div>
        </>
    );
}

export default Navbar;