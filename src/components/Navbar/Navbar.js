import React from "react";
import "./navbar.css"
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink class="navbar-brand" to="/">
        <img src="./Images/Big Logo.png"  alt=""/>
     </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/platform">
               <span> Platform <span className="sr-only">(current)</span></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="pricing">
              <span> Pricing</span> 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/acceleration">
              <span> Acceleration</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resources">
              <span>  Resources</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/customer">
              <span>Customer Stories</span>
              </NavLink>
            </li>
       
          </ul>
          <div className="form-inline my-2 my-lg-0">
          <button type="button" class="btn btn-light btnlogin">Log in</button>
          <button type="button" className="btn btn-outline btn-sm btnschedule">SCHEDULE DEMO</button>
          <button type="button" className="btn btn-secondary btn-sm btncustomcss">TRY FOR FREE </button>

        
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
