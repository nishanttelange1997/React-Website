import React from "react";
import { Link, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,fas } from '@fortawesome/free-solid-svg-icons'
import { BsFillPersonPlusFill } from "react-icons/bs";
function Navbar()
{
return(
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">

    <NavLink className="navbar-brand"  to="/" >REACT-APP</NavLink>
    
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " exact to="/" >HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about" >ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    
    </div>
 
    <Link className="btn btn-outline-light text-black text-center" to="/users/add">ADD-USER  <BsFillPersonPlusFill/> </Link>
  </div>


</nav>

</>
)}
export default Navbar;