import React from "react";
import { Link } from 'react-router-dom';
import "../assets/styles.css";
import { Container } from "reactstrap";
import logo from "../assets/img/logo.png"

function Sidebar () {
  return(
    <>
    <div className="sidebar-container">
     <img
     className="img-logo"
     src={logo}></img>
      <ul className="sidebar-list">
        <li>
          <Link to="/home-page">Home Page</Link>
        </li>
        <li>
          <Link to="/view-one">View One</Link>
        </li>
        <li>
          <Link to="/view-two">View Two</Link>
        </li>
      </ul>
    </div>
    </>
  )

};
export default Sidebar;
