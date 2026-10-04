import { Link } from "react-router-dom";

function GenLinks()
{
    return(
        <>

<nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Emp-App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">About Us</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="#">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}

export default GenLinks;