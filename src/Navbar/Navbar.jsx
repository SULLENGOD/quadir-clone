import React from "react";
import logo from './img/Logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href=".">
          <img src={ logo } alt="logo" srcSet="" className="logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href=".">
                QUADIR DRONE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=".">
                FEATURES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=".">
                REVIEWS
              </a>
            </li>
          </ul>
            <button className="btn btn-primary rounded-pill d-none d-lg-block">ORDER NOW</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
