import React from "react";
import { Link } from "react-router-dom";
const Nav = (myProps) => {
return(
<>
<nav className={`navbar navbar-expand-lg navbar-${myProps.mode} bg-${myProps.mode}  `}>
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="index.html">Home</a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/about">About</a> */}
          <Link className="nav-link" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/about">About</a> */}
          <Link className="nav-link" to="/about">About</Link>
        </li>
              
        <li className="nav-item">
          {/* <a className="nav-link" href="/about">About</a> */}
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>

        <li className="nav-item">
          {/* <a className="nav-link" href="/about">About</a> */}
          <Link className="nav-link" to="/textform">textform</Link>
        </li>
         
        
      </ul>
    
      <div className={`form-check form-switch text-${myProps.switchMode}`}>
  <input className="form-check-input" onClick={myProps.toggleMode}  type="checkbox" id="flexSwitchCheckDefault" / >
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Light Mdoet</label>
</div>
    </div>
  </div>
</nav>
</>
)}


export default Nav;