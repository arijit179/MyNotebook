import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
// import { useState } from "react";
const Navbar = () => {
  let history = useHistory();
  // const [credentials, setCredentials] = useState({ name: "", email: ""})
  // const handlePage = async () => {
  //     const response = await fetch("http://localhost:5000/api/auth/getuser",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "auth-token": localStorage.getItem('token')
  //         },
  //         body: JSON.stringify({ name: credentials.name }),
  //       });
  //       const json = await response.json();
  //       // console.log(json);
  //       setCredentials({ name: json.name });
  // }
  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push("/login");
  }
//   if(localStorage.getItem('token')){
//     handlePage();
// }

  let location = useLocation();
  React.useEffect(() => {}, [location]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ? <form className="d-flex">
            <Link className="btn btn-dark mx-1" to="/signup" role="button">
              Signup
            </Link>
            <Link className="btn btn-dark mx-1" to="/login" role="button">
              Login
            </Link>
          </form> : <div className="navbar-nav">
            {/* <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle mx-4" to="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    My profile
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li className="dropdown-item" >{credentials.name}</li>
                    <li className="dropdown-item">{credentials.email}</li>
                  </ul>
                </li>
              </ul>
            </div> */}
            {/* <div className="container my-2 text-white">Welcome {credentials.name}</div> */}
            <button className="btn btn-dark" onClick={handleLogout}>Logout</button>
          </div>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
