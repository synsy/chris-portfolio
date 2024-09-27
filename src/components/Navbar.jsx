import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink exact to="/" className="navbar-logo" activeClassName="active">
          <img src="../images/o-icon.png" alt="logo" className="navbar-icon" height="60px"/>
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-links" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className="nav-links" activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li className="nav-item" id="nav-resume">
            <NavLink to="/resume" className="nav-links" activeClassName="active">
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
