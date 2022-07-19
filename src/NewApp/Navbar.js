import React from "react";
import {NavLink} from "react-router-dom";
import logo1 from "../NewApp/n.png"
 

function Navbar()
{
    return(
        <>
    {/* <nav className="bg-light navbar-expand-md navbar-light ">
        <ul className="navbar-nav">
            <li className="nav-item">    <NavLink to="/" className="nav-link">HOME</NavLink></li>
            <li className="nav-item">    <NavLink to="/about" className="nav-link">ABOUT</NavLink></li>
            <li className="nav-item">    <NavLink to="/contact" className="nav-link">CONTACTS</NavLink></li>
            <li className="nav-item">    <NavLink to="/service" className="nav-link">SERVICE</NavLink></li>
        
        </ul>

    </nav> */}
    <div className="container-fluid ">
        <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
        <img src={logo1} className="rounded-circle me-3" style={{height:"50px",width:"50px"}} />
        <b>Nishant-Website</b>
        </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
    
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li className="nav-item">
          <NavLink exact  activeClassName="change" className="nav-link "  to="/">Home</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink exact activeClassName="change" className="nav-link" to="/about">About</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink exact activeClassName="change" className="nav-link" to="/service">Services</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink exact activeClassName="change" className="nav-link" to="/contact">Contact</NavLink>
        </li>
      
      </ul>

    </div>
  </div>
</nav>
            </div>
             <div className="col-1"></div>
        </div>
    </div>


        </>
    )

}

export default Navbar;